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
    <section className="py-20">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl mb-3">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional services to bring your ideas to life
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id} 
                className="group relative overflow-hidden border-2 transition-all hover:border-primary/50 hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="mb-3 flex size-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
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
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t(service.techStackKey)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
