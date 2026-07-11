import { useTranslation } from "react-i18next";
import { services } from "@/data/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Services() {
  const { t } = useTranslation();

  return (
    <section className="mt-20 md:mt-24">
      <div className="container max-w-10/12 mx-auto px-4">
        <div className="grid items-start lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              {t("services.title")}
            </p>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              {t("services.subtitle")}
            </h2>
            <div className="h-1 w-16 rounded-full bg-linear-to-r from-primary to-amber-600" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.id}
                  className="group relative overflow-hidden border-2 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-3 flex size-16 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="size-8 text-primary" strokeWidth={2} />
                    </div>
                    <CardTitle className="text-lg font-bold leading-tight">
                      {t(service.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-sm leading-relaxed">
                      {t(service.descriptionKey)}
                    </CardDescription>
                  
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
