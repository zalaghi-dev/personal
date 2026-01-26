import { useTranslation } from "react-i18next";
import { ContactLinksGroup } from "./contact-links-group";

export function Footer() {
  const { t } = useTranslation();
  return (
    <div className="bg-muted/50">
      <div className="container px-8 py-2 max-w-10/12 mx-auto">
        <div className="flex justify-between items-center">
          <div className="font-bold">{t("name")} &copy;</div>
          <ContactLinksGroup />
        </div>
      </div>
    </div>
  );
}
