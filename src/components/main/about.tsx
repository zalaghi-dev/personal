import { useTranslation } from "react-i18next";

import { Button } from "../ui/button";
import { contactLinks } from "@/data/contact-links";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-muted/50">
        <div className="container max-w-10/12 mx-auto">
          <div className="grid py-10 gap-6 md:grid-cols-[160px_1fr] items-start">
            <div className="mx-auto md:mx-0">
              <div className="relative size-32 rounded-xl bg-linear-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-inner">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed text-sm md:text-base text-muted-foreground">
                {t("about.p1")}
              </p>
              <div className=" flex flex-wrap gap-1 mt-4">
                {contactLinks.map(({ Icon, alt, url, variant }) => (
                  <Button asChild variant={variant} size="icon-sm">
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={alt}
                    >
                      {Icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
