import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { File, Search, Settings } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-20 bg-muted/50">
        <div className="container px-4 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl">{t("about.title")}</CardTitle>
              <CardDescription className="text-base">
                {t("about.subtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-[160px_1fr] items-start">
                <div className="mx-auto md:mx-0">
                  <div className="relative size-32 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center shadow-inner">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="leading-relaxed text-sm md:text-base text-muted-foreground">
                    {t("about.p1")}
                  </p>
                  <p className="leading-relaxed text-sm md:text-base text-muted-foreground">
                    {t("about.p2")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* TODO */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <OrbitingCircles>
          <File />
          <Settings />
          <File />
        </OrbitingCircles>
        <OrbitingCircles radius={100} reverse>
          <File />
          <Settings />
          <File />
          <Search />
        </OrbitingCircles>
      </div>
    </>
  );
}
