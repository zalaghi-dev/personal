import { Linkedin, Mail } from "lucide-react";
import Telegram from "@/assets/icons/telegram.svg?react";
import Whatsapp from "@/assets/icons/whatsapp.svg?react";
import Github from "@/assets/icons/github.svg?react";
import type { JSX } from "react";
export const contactLinks: {
  Icon: JSX.Element;
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  alt: string;
  url: string;
}[] = [
  {
    Icon: <Mail />,
    variant: "default",
    alt: "email",
    url: "mailto:zalaghi.dev@gmail.com",
  },
  {
    Icon: <Linkedin />,
    variant: "secondary",
    alt: "linkedin",
    url: "https://www.linkedin.com/in/zalaghi",
  },
  {
    Icon: <Telegram />,
    variant: "secondary",
    alt: "telegram",
    url: "https://t.me/amirzalaghi",
  },
  {
    Icon: <Whatsapp />,
    variant: "secondary",
    alt: "whatsapp",
    url: "https://wa.me/+989106030260",
  },
  {
    Icon: <Github />,
    variant: "secondary",
    alt: "github",
    url: "https://github.com/zalaghi-dev",
  },
];
