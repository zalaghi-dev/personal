import { useTranslation } from "react-i18next";
import { ContactLinksGroup } from "./contact-links-group";
import me2 from "@/assets/picture/me2.jpg";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-muted/50">
        <div className="container max-w-10/12 mx-auto">
          <div className="grid py-10 gap-6 md:grid-cols-[160px_1fr] items-start">
            <div className="mx-auto md:mx-0">
              <div className="relative size-32 rounded-xl bg-linear-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={me2}
                  alt={t("hero.name")}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-sm md:text-base text-muted-foreground">
                {t("about.p1")}
              </p>
              <div className="mt-4">
                <ContactLinksGroup />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
