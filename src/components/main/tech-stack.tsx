import { Marquee } from "@/components/ui/marquee";
import { technologies } from "@/data/tech-stack";
const frontend = technologies.filter((t) => t.category === "frontend");
const backend = technologies.filter((t) => t.category === "backend");

export function TechStack() {
  return (
    <div className="relative bg-muted py-3 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:22s] [--gap:1rem] py-2">
        {frontend.map((tech) => (
          <div key={`fe-${tech.name}`} className="flex items-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-8 object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:22s] [--gap:1rem] py-2">
        {backend.map((tech) => (
          <div key={`be-${tech.name}`} className="flex items-center">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-8 object-contain opacity-85 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
