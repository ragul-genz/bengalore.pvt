export interface GallerySlot {
  id: string;
  title: string;
  category: string;
  caption: string;
  image?: string;
}

export interface KannadotsavaEvent {
  title: string;
  nativeTitle: string;
  tagline: string;
  website: string;
  websiteUrl: string;
  organizedBy: string;
  description: string;
  aboutText: string[];
  keyHighlights: {
    title: string;
    description: string;
  }[];
  gallerySlots: GallerySlot[];
}

export const KANNADOTSAVA_EVENT: KannadotsavaEvent = {
  title: "Kannadotsava",
  nativeTitle: "ಕನ್ನಡೋತ್ಸವ",
  tagline: "Celebrating the Rich Cultural Heritage, Language & Traditions of Karnataka",
  website: "www.kannadotsava.com",
  websiteUrl: "https://www.kannadotsava.com",
  organizedBy: "New Link Technologies Bangalore Pvt. Ltd.",
  description:
    "Kannadotsava is a premier cultural festival celebrating Karnataka's glorious heritage, rich literature, folk arts, music, and community harmony. Proudly supported and organized by New Link Technologies Bangalore Pvt. Ltd. as part of our enduring commitment to cultural preservation and community empowerment.",
  aboutText: [
    "New Link Technologies Bangalore Pvt. Ltd. is deeply proud to champion Kannadotsava (www.kannadotsava.com)—a grand celebration uniting communities through Karnataka's historic arts, Kannada literature, traditional music, and cultural performances.",
    "Under our corporate motto 'Connecting Values,' our leadership team and dedicated patrons actively contribute to preserving regional traditions while promoting youth cultural talent, social unity, and community outreach across Bangalore and Karnataka.",
  ],
  keyHighlights: [
    {
      title: "Grand Cultural Celebrations",
      description:
        "Folk and classical music concerts, traditional dance forms, and artistic expressions honoring Karnataka's vibrant culture.",
    },
    {
      title: "Kannada Literature & Heritage",
      description:
        "Tributes to visionary Kannada poets, literary discussions, and youth engagement fostering love for the language and traditions.",
    },
    {
      title: "Community Outreach & Felicitations",
      description:
        "Social initiatives, student recognitions, and community felicitations honoring outstanding contributors to Karnataka's arts and society.",
    },
    {
      title: "Official Digital Portal",
      description:
        "Explore announcements, schedules, and event updates directly at the official event website www.kannadotsava.com.",
    },
  ],
  gallerySlots: [
    {
      id: "kannadotsava-1",
      title: "Grand Inaugural Ceremony",
      category: "Ceremonial Launch",
      caption: "Ceremonial lamp lighting, traditional welcome, and grand inaugural address.",
    },
    {
      id: "kannadotsava-2",
      title: "Cultural & Musical Performances",
      category: "Stage Festivities",
      caption: "Captivating classical orchestra, folk rhythms, and youth cultural showcases.",
    },
    {
      id: "kannadotsava-3",
      title: "Community Honors & Felicitations",
      category: "Dignitary Honors",
      caption: "Honoring eminent guests, artists, and community contributors with traditional honors.",
    },
    {
      id: "kannadotsava-4",
      title: "Literary & Heritage Tributes",
      category: "Heritage & Arts",
      caption: "Celebration of timeless Kannada literature, poetry recitals, and cultural heritage.",
    },
    {
      id: "kannadotsava-5",
      title: "Festival Audience & Community Gathering",
      category: "Community Spirit",
      caption: "Vibrant participation of families, youth, and patrons across Karnataka.",
    },
    {
      id: "kannadotsava-6",
      title: "Leadership & Patron Address",
      category: "Organizers & Patrons",
      caption: "Directors of New Link Technologies Bangalore Pvt. Ltd. addressing the gathering.",
    },
  ],
};
