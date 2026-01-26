import { mainSkills } from "@/data/main-skills";
import { Card, CardContent } from "../ui/card";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export function Skills() {
  const { t } = useTranslation();

  return (
    <section className="bg-muted/50 ">
      <div className="container py-10 max-w-10/12 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-3">
            {t("skills.title")}
            <div className="flex items-center gap-1 capitalize justify-center mt-3">
              <div className="border h-4.5 rounded-full p-0.5 flex items-center gap-1 text-xs">
                <div className="size-3 rounded-full bg-cyan-600"></div>
                <div className="pe-1.5">{t("skills.legend.basic")}</div>
              </div>
              <div className="border h-4.5 rounded-full p-0.5 flex items-center gap-1 text-xs">
                <div className="size-3 rounded-full bg-yellow-600"></div>
                <div className="pe-1.5">{t("skills.legend.mid")}</div>
              </div>
              <div className="border h-4.5 rounded-full p-0.5 flex items-center gap-1 text-xs">
                <div className="size-3 rounded-full bg-green-600"></div>
                <div className="pe-1.5">{t("skills.legend.pro")}</div>
              </div>
            </div>
          </h2>
        </div>
        <div className="flex gap-3 items-center justify-center flex-wrap">
          {mainSkills.map(({ rate, title, img }) => (
            <Card
              key={title}
              className={clsx(
                "size-35 border-2 flex items-center justify-center text-center",
                {
                  "border-green-600": rate === "pro",
                  "border-yellow-600": rate === "mid",
                  "border-cyan-600": rate === "base",
                },
              )}
            >
              <CardContent className="flex flex-col items-center justify-center gap-3 p-0">
                <span className="text-sm font-medium">{title}</span>

                {img && (
                  <img
                    src={img}
                    alt={title}
                    className="size-15"
                    loading="lazy"
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
