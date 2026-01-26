import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experiences } from "@/data/experiences";

export function Experiences() {
  return (
    <div className="container py-10 max-w-10/12 mx-auto">
      {/* Timeline */}
      <div>
        <section className={cn("bg-background py-32")}>
          <div className="container">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold md:text-4xl mb-3">
                Let's Take a look at my journey
              </h2>
            </div>
            <div className="relative mx-auto max-w-4xl">
              <Separator
                orientation="vertical"
                className="absolute top-4 left-2 bg-muted"
              />
              {experiences.map((entry, index) => (
                <div key={index} className="relative mb-10 pl-8">
                  <div className="absolute top-3.5 left-0 flex size-4 items-center justify-center rounded-full bg-foreground" />
                  <h4 className="rounded-xl py-2 text-xl font-bold tracking-tight xl:mb-4 xl:px-3">
                    {entry.title}
                  </h4>

                  <h5 className="text-md top-1.75 -left-38 rounded-xl tracking-tight text-muted-foreground xl:absolute">
                    {entry.date}
                  </h5>

                  <Card className="my-5 p-0 border-none shadow-none">
                    <CardContent className="p-4">
                      <div
                        className="prose text-sm text-foreground dark:prose-invert"
                        dangerouslySetInnerHTML={{ __html: entry.content }}
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
