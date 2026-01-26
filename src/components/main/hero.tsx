import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";
import { Meteors } from "../ui/meteors";
import { Button } from "../ui/button";
import { ContactDialog } from "./contact-dialog";
import me1 from "@/assets/picture/me1.jpg";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[calc(100vh-7rem)] items-center md:items-start justify-center pt-24 md:pt-32 pb-12 overflow-hidden">
      <div
        dir="ltr"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <Meteors />
      </div>

      <div className="container max-w-10/12 mx-auto grid gap-8 md:gap-12 px-4 md:grid-cols-2">
        <div className="flex px-2 sm:px-6 md:px-10 flex-col items-start justify-center gap-5">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground">
              {t("hero.greeting")}
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <Typewriter
                options={{
                  strings: [t("hero.name"), t("hero.role")],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>

          <div className="flex flex-wrap mt-2 sm:mt-10 gap-4">
            <Button size="lg" asChild>
              <a href="https://docs.google.com/document/d/1kA1jCErEj1byTw4eHNH0NzfrSPw3a4-ZsF3flyy8mMQ" target="_blank" rel="noopener noreferrer">
                {t("hero.resume")}
              </a>
            </Button>
            <ContactDialog />
          </div>
        </div>
        <div className="mt-12 mb-12 md:mb-0 md:mt-0 flex items-center justify-center">
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
