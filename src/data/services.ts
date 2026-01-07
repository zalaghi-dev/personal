import { Layers, Server, Rocket, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  techStackKey: string;
}

export const services: Service[] = [
  {
    id: "fullStack",
    icon: Layers,
    titleKey: "services.fullStack.title",
    descriptionKey: "services.fullStack.description",
    techStackKey: "services.fullStack.techStack",
  },
  {
    id: "backend",
    icon: Server,
    titleKey: "services.backend.title",
    descriptionKey: "services.backend.description",
    techStackKey: "services.backend.techStack",
  },
  {
    id: "saas",
    icon: Rocket,
    titleKey: "services.saas.title",
    descriptionKey: "services.saas.description",
    techStackKey: "services.saas.techStack",
  },
  {
    id: "devops",
    icon: Cloud,
    titleKey: "services.devops.title",
    descriptionKey: "services.devops.description",
    techStackKey: "services.devops.techStack",
  },
];
