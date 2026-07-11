import { projects } from "@/data/projects";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useLanguageStore } from "@/store/language-store";

export function Projects() {
  const { t } = useTranslation();
  const direction = useLanguageStore((state) => state.direction);

  return (
    <section id="projects" className="scroll-mt-14 bg-background">
      <div className="container py-16 max-w-10/12 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between border-2 hover:border-primary/60 transition-colors"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-sm md:text-base font-semibold">
                  {project.name}
                </CardTitle>
                {project.company && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {project.company}
                  </p>
                )}
              </CardHeader>
              <CardContent className="pt-0 space-y-3 text-xs md:text-sm">
                <p className="text-muted-foreground leading-relaxed">
                  {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                  {/* @ts-ignore dynamic key outside generated types */}
                  {t(`projects.items.${project.id}.description`)}
                </p>
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                  >
                    <span>{t("projects.viewProject")}</span>
                    {direction === "rtl" ? (
                      <ArrowUpLeft className="size-3.5" />
                    ) : (
                      <ArrowUpRight className="size-3.5" />
                    )}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

