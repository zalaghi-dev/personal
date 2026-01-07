import { Code, Smartphone, Palette, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export const services: Service[] = [
  {
    id: "webDev",
    icon: Code,
    titleKey: "services.webDev.title",
    descriptionKey: "services.webDev.description",
  },
  {
    id: "mobileDev",
    icon: Smartphone,
    titleKey: "services.mobileDev.title",
    descriptionKey: "services.mobileDev.description",
  },
  {
    id: "uiDesign",
    icon: Palette,
    titleKey: "services.uiDesign.title",
    descriptionKey: "services.uiDesign.description",
  },
  {
    id: "backend",
    icon: Server,
    titleKey: "services.backend.title",
    descriptionKey: "services.backend.description",
  },
];
