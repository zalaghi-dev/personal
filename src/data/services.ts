import { Layers, Server, Rocket, Cloud } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { TranslationKeys } from "@/locales";

export interface Service {
  id: string;
  icon: LucideIcon;
  titleKey: TranslationKeys;
  descriptionKey: TranslationKeys;
}

export const services: Service[] = [
  {
    id: "fullStack",
    icon: Layers,
    titleKey: "services.fullStack.title",
    descriptionKey: "services.fullStack.description",
  },
  {
    id: "backend",
    icon: Server,
    titleKey: "services.backend.title",
    descriptionKey: "services.backend.description",
  },
  {
    id: "saas",
    icon: Rocket,
    titleKey: "services.saas.title",
    descriptionKey: "services.saas.description",
  },
  {
    id: "devops",
    icon: Cloud,
    titleKey: "services.devops.title",
    descriptionKey: "services.devops.description",
  },
];
