import { useId, useRef, type RefObject } from "react";
import { useCountUp } from "react-countup";
import { Briefcase, FolderKanban, Layers, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { TranslationKeys } from "@/locales";
import type { LucideIcon } from "lucide-react";
import { careerStartYear, experiences } from "@/data/experiences";
import { projects } from "@/data/projects";
import { technologies } from "@/data/tech-stack";

const STATS: {
  id: string;
  icon: LucideIcon;
  labelKey: TranslationKeys;
  value: number;
}[] = [
  {
    id: "yearsExperience",
    icon: Target,
    labelKey: "hero.stats.yearsExperience",
    value: new Date().getFullYear() - careerStartYear,
  },
  {
    id: "projectsCompleted",
    icon: FolderKanban,
    labelKey: "hero.stats.projectsCompleted",
    value: projects.length,
  },
  {
    id: "companies",
    icon: Briefcase,
    labelKey: "hero.stats.companies",
    value: experiences.filter((experience) => experience.id !== "independent")
      .length,
  },
  {
    id: "technologies",
    icon: Layers,
    labelKey: "hero.stats.technologies",
    value: technologies.length,
  },
];

function StatValue({ value }: { value: number }) {
  const ref = useRef<HTMLElement>(null);

  useCountUp({
    ref: ref as RefObject<HTMLElement>,
    end: value,
    duration: 2,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return <span ref={ref} />;
}

export function HeroStats() {
  const { t } = useTranslation();
  const gradientId = useId().replace(/:/g, "");

  return (
    <div className="grid w-full grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-6">
      <svg aria-hidden="true" className="absolute size-0">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--color-amber-600)" />
          </linearGradient>
        </defs>
      </svg>
      {STATS.map(({ id, icon: Icon, labelKey, value }) => (
        <div key={id} className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <Icon
              className="size-5 shrink-0"
              stroke={`url(#${gradientId})`}
              strokeWidth={2}
            />
            <p className="text-2xl font-bold leading-none tracking-tight">
              <StatValue value={value} />
            </p>
          </div>
          <p className="text-sm text-muted-foreground">{t(labelKey)}</p>
        </div>
      ))}
    </div>
  );
}
