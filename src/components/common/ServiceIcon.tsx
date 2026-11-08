import React from "react";
import {
  Volume2,
  Presentation,
  MonitorCheck,
  Video,
  Camera,
  Network,
  Server,
  Sun,
  Shield,
  Layers,
  type LucideProps,
} from "lucide-react";

interface ServiceIconProps extends LucideProps {
  name: string;
}

export function ServiceIcon({ name, className, ...props }: ServiceIconProps) {
  const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    Volume2,
    Presentation,
    MonitorCheck,
    Video,
    Camera,
    Network,
    Server,
    Sun,
    Shield,
    Layers,
  };

  const IconComponent = iconMap[name] || Server;
  return <IconComponent className={className} {...props} />;
}

