// Cinematic Audio Engine for New Link Technologies
// Provides smooth fade-in / fade-out audio when the user holds or enters Cinema Mode.

class CinematicAudioEngine {
  private audioElement: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private synthGain: GainNode | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;

  constructor() {
    // Lazy initialized on first user interaction
  }

  private initAudio() {
    if (typeof window === "undefined") return;

    if (!this.audioElement) {
      try {
        this.audioElement = new Audio("/audio/cinematic-reel.wav");
        this.audioElement.loop = true;
        this.audioElement.volume = 0;
      } catch (err) {
        console.warn("Audio element fallback:", err);
      }
    }

    if (!this.audioContext) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          this.audioContext = new AudioCtx();
        }
      } catch (err) {
        console.warn("Web Audio Context not available:", err);
      }
    }
  }

  public play() {
    if (typeof window === "undefined" || this.isMuted) return;
    this.initAudio();

    this.isPlaying = true;

    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume().catch(() => {});
    }

    if (this.audioElement) {
      this.audioElement.currentTime = 0;
      this.audioElement
        .play()
        .then(() => {
          this.fadeVolume(0.8, 400);
        })
        .catch((err) => {
          console.warn("Audio play prevented:", err);
          // Fallback to Web Audio Synth if audio file play fails
          this.playSynth();
        });
    } else {
      this.playSynth();
    }
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.audioElement) {
      this.fadeVolume(0, 300, () => {
        if (this.audioElement) {
          this.audioElement.pause();
          this.audioElement.currentTime = 0;
        }
      });
    }

    if (this.synthGain && this.audioContext) {
      const now = this.audioContext.currentTime;
      this.synthGain.gain.setValueAtTime(this.synthGain.gain.value, now);
      this.synthGain.gain.linearRampToValueAtTime(0, now + 0.3);
    }
  }

  private fadeVolume(targetVolume: number, durationMs: number, onComplete?: () => void) {
    if (!this.audioElement) return;
    const startVolume = this.audioElement.volume;
    const startTime = performance.now();

    const ramp = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      if (this.audioElement) {
        this.audioElement.volume = Math.max(0, Math.min(1, startVolume + (targetVolume - startVolume) * progress));
      }

      if (progress < 1) {
        requestAnimationFrame(ramp);
      } else if (onComplete) {
        onComplete();
      }
    };

    requestAnimationFrame(ramp);
  }

  private playSynth() {
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.3, now + 0.4);
    masterGain.connect(ctx.destination);
    this.synthGain = masterGain;

    // Sub-bass drone (55Hz A1)
    const osc1 = ctx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(55, now);
    const bassGain = ctx.createGain();
    bassGain.gain.setValueAtTime(0.5, now);
    osc1.connect(bassGain);
    bassGain.connect(masterGain);
    osc1.start(now);

    // Warm ambient harmonic (110Hz A2)
    const osc2 = ctx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(110, now);
    const padGain = ctx.createGain();
    padGain.gain.setValueAtTime(0.25, now);
    osc2.connect(padGain);
    padGain.connect(masterGain);
    osc2.start(now);
  }
}

export const cinematicAudio = new CinematicAudioEngine();
