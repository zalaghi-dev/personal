import { Trans, useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { Meteors } from "../ui/meteors";
import { Button } from "../ui/button";
import { ContactDialog } from "./contact-dialog";
import { HeroStats } from "./hero-stats";
import me1 from "@/assets/picture/me1.jpg";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative flex scroll-mt-14 items-center md:items-start justify-center pt-4 md:pt-12 pb-10 overflow-hidden"
    >
      <div
        dir="ltr"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <Meteors />
      </div>

      <div className="container max-w-10/12 mx-auto grid gap-8 md:gap-12 px-4 md:grid-cols-12">
        <div className="flex flex-col items-start justify-center gap-5 md:col-span-8">
          <div className="space-y-1 sm:space-y-2">
            <h2 className="text-lg sm:text-lg md:text-xl font-medium bg-linear-to-r from-primary via-60% to-amber-600 bg-clip-text text-transparent">
              {t("hero.role")}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <Typewriter
                options={{
                  strings: [t("hero.greeting"), t("hero.name")],
                  autoStart: true,
                  loop: true,
                }}
              />
              <Trans
                i18nKey="hero.tagline"
                components={{
                  br: <br />,
                  amber: (
                    <span className="bg-linear-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent" />
                  ),
                  primary: (
                    <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent" />
                  ),
                }}
              />
            </h1>
            <p className="text-base text-muted-foreground">
              <Trans
                i18nKey="hero.description"
                components={{ br: <br className="hidden md:block" /> }}
              />
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://docs.google.com/document/d/1kA1jCErEj1byTw4eHNH0NzfrSPw3a4-ZsF3flyy8mMQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("hero.resume")}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <ContactDialog />
            </div>
            <HeroStats />
          </div>
        </div>
        <div className="mt-12 md:col-span-4 mb-12 md:mb-0 md:mt-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 animate-pulse">
              <div className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/20"></div>
              <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/10"></div>
              <div className="absolute left-1/2 top-1/2 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/5"></div>
            </div>
            <div className="relative size-44 sm:size-56 md:size-64 overflow-hidden rounded-full bg-muted">
              <img
                src={me1}
                alt={t("hero.name")}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
