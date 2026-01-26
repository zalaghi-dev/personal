import { ModeToggle } from "./mode-toggle";
import { LanguageToggle } from "./language-toggle";
import { ScrollProgress } from "../ui/scroll-progress";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-10/12 mx-auto items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">{t("name")}</span>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
      <ScrollProgress className="bottom-0" />
    </header>
  );
}
