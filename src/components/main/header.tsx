import { useId } from "react";
import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { ScrollProgress } from "../ui/scroll-progress";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { Code2 } from "lucide-react";
import type { TranslationKeys } from "@/locales";
import { resumeUrl } from "@/data/constants";

const NAV_ITEMS: { href: string; labelKey: TranslationKeys }[] = [
  { href: "#home", labelKey: "nav.home" },
  { href: "#about", labelKey: "nav.about" },
  { href: "#experience", labelKey: "nav.experience" },
  { href: "#projects", labelKey: "nav.projects" },
  { href: "#stack", labelKey: "nav.stack" },
  { href: "#contact", labelKey: "nav.contact" },
];

export function Header() {
  const { t } = useTranslation();
  const gradientId = useId().replace(/:/g, "");
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/20">
      <div className="container flex h-14 max-w-10/12 mx-auto items-center justify-between">
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <div className="relative size-6">
            <svg aria-hidden="true" className="absolute size-0">
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--color-amber-500)" />
                </linearGradient>
              </defs>
            </svg>
            <Code2 className="size-6" stroke={`url(#${gradientId})`} />
          </div>
          <span className="font-bold">{t("name")}</span>
        </a>
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{t(item.labelKey)}</a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <LanguageToggle />
          <ModeToggle />
          <Button asChild>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              {t("hero.resume")}
            </a>
          </Button>
        </div>
      </div>
      <ScrollProgress className="bottom-0" />
    </header>
  );
}
