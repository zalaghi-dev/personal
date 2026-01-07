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
    <section className="py-20 bg-muted/50">
      <div className="container px-4">
        {/* <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            {t("services.title")}
          </h2>
        </div> */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 m-auto flex size-24 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-14 m-auto text-primary" />
                  </div>
                  <CardTitle className="text-xl text-center font-semibold">
                    {t(service.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center mb-4">
                    {t(service.descriptionKey)}
                  </CardDescription>
                  <p className="text-xs text-muted-foreground/80 text-center leading-relaxed">
                    {t(service.techStackKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
