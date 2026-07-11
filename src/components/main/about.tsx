import { useTranslation } from "react-i18next";
import { ContactLinksGroup } from "./contact-links-group";
import me2 from "@/assets/picture/me2.jpg";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="scroll-mt-14 pt-5">
        <div className="container max-w-10/12 mx-auto px-4">
          <div className="grid items-start lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
            <div className="mx-auto md:mx-0">
              <div className="relative size-[calc(100%-50px)] aspect-square rounded-xl bg-linear-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-inner overflow-hidden">
                <img
                  src={me2}
                  alt={t("hero.name")}
                  className="object-cover object-[50%_14px]"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-light pb-2 uppercase tracking-wider text-primary">
                  {t("about.title")}
                </p>
                <p className="leading-relaxed text-sm md:text-base text-muted-foreground">
                  {t("about.p1")}
                </p>
              </div>

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
