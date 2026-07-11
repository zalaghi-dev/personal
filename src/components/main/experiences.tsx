import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experiences";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import { resumeUrl } from "@/data/constants";

export function Experiences() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section
      id="experience"
      className="container scroll-mt-14 max-w-10/12 mx-auto px-4"
    >
      <div>
        <section className={cn("bg-background py-32")}>
          <div className="grid items-start lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
            <div className="mb-16 text-start">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                {t("nav.experience")}
              </p>
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                {t("experiences.title")}
              </h2>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="mt-2 bg-transparent! hover:bg-primary!"
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  {t("hero.resume")}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="relative mx-auto w-full max-w-4xl">
              <Separator
                orientation="vertical"
                className={cn("absolute top-4 bg-primary", {
                  "start-4": !isRTL,
                  "end-4": isRTL,
                })}
              />

              {experiences.map((entry, index) => (
                <div
                  key={index}
                  className={cn("relative mb-10 flex gap-4", {
                    "ps-10": !isRTL,
                    "pe-10": isRTL,
                  })}
                >
                  <div
                    className={cn(
                      "absolute top-3.5 flex size-4 items-center justify-center rounded-full bg-primary",
                      {
                        "start-2": !isRTL,
                        "end-2": isRTL,
                      },
                    )}
                  />

                  <div className="min-w-0 flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-xl mt-1.5 font-bold tracking-tight">
                        {t(`experiences.items.${entry.id}.date`)}
                        {/* {entry.title} */}
                      </h4>
                    </div>

                    <Card
                      className={clsx("border-none p-0 shadow-none", {
                        "bg-transparent":
                          t(`experiences.items.${entry.id}.content`).length ===
                          0,
                      })}
                    >
                      <CardContent className="p-4">
                        <div className="prose text-sm dark:prose-invert">
                          <div className="text-2xl font-bold text-foreground">
                            {entry.title}
                          </div>
                          <div
                            className="text-muted-foreground"
                            dangerouslySetInnerHTML={{
                              __html:
                                t(`experiences.items.${entry.id}.content`) ??
                                "",
                            }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
