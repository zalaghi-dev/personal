import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { Meteors } from "../ui/meteors";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[calc(100vh-7rem)] items-start justify-center pt-32 py-12">
      <div className="z-[-3]">
        <Meteors />
      </div>

      <div className="container grid gap-12 px-4 md:grid-cols-2 md:gap-8">
        <div className="flex px-10 flex-col items-start justify-center gap-6">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-muted-foreground">
              {t("hero.greeting")}
            </h2>
            <h1 className="text-5xl font-bold md:text-6xl">
              <Typewriter
                options={{
                  strings: [t("hero.name"), t("hero.role")],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <div className="flex flex-wrap mt-10 gap-4">
            <Button size="lg">{t("hero.resume")}</Button>
            <Button size="lg" variant="outline">
              {t("hero.contact")}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-pulse">
              <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20"></div>
              <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/10"></div>
              <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/5"></div>
            </div>
            <div className="relative size-64 overflow-hidden rounded-full bg-muted">
              <div className="flex h-full w-full items-center justify-center text-6xl">
                👤
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
