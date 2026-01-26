import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experiences";
import { useTranslation } from "react-i18next";

export function Experiences() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="container py-10 max-w-10/12 mx-auto">
      {/* Timeline */}
      <div>
        <section className={cn("bg-background py-32")}>
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold md:text-4xl mb-3">
                {t("experiences.title")}
              </h2>
            </div>
            <div className="relative mx-auto max-w-4xl">
              <Separator
                orientation="vertical"
                className={cn("absolute top-4 bg-muted", {
                  "left-2": !isRTL,
                  "right-2": isRTL,
                })}
              />
              {experiences.map((entry, index) => (
                <div
                  key={index}
                  className={cn("relative mb-10", {
                    "pl-8": !isRTL,
                    "pr-8": isRTL,
                  })}
                >
                  <div
                    className={cn(
                      "absolute top-3.5 flex size-4 items-center justify-center rounded-full bg-foreground",
                      {
                        "left-0": !isRTL,
                        "right-0": isRTL,
                      },
                    )}
                  />
                  <h4
                    className={cn(
                      "rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3",
                      {
                        "xl:text-left": !isRTL,
                        "xl:text-right": isRTL,
                      },
                    )}
                  >
                    {entry.title}
                  </h4>

                  <h5
                    className={cn(
                      "text-md rounded-xl tracking-tight text-muted-foreground xl:absolute",
                      {
                        "top-1.75 -left-38 text-left": !isRTL,
                        "top-1.75 -right-38 text-right": isRTL,
                      },
                    )}
                  >
                    {/* Dynamic i18n key for experience date */}
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore - dynamic key not covered by generated types */}
                    {t(`experiences.items.${entry.id}.date`)}
                  </h5>

                  <Card className="my-5 p-0 border-none shadow-none">
                    <CardContent className="p-4">
                      <div
                        className="prose text-sm text-foreground dark:prose-invert"
                        dangerouslySetInnerHTML={{
                          // Dynamic i18n key for experience description
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore - dynamic key not covered by generated types
                          __html: t(`experiences.items.${entry.id}.content`),
                        }}
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
