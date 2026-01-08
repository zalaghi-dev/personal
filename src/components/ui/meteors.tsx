import React, { useMemo } from "react"

import { cn } from "@/lib/utils"

interface MeteorsProps {
  number?: number
  minDelay?: number
  maxDelay?: number
  minDuration?: number
  maxDuration?: number
  angle?: number
  className?: string
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const prand = (seed: number) => {
    const x = Math.sin(seed * 9301 + 49297) * 233280
    return x - Math.floor(x)
  }

  const meteorStyles = useMemo(() => {
    return [...new Array(number)].map((_, idx) => {
      const r1 = prand(idx + 1)
      const r2 = prand(idx + 2)
      return {
        "--angle": -angle + "deg",
        top: "-5%",
        left: `${((idx + 1) / (number + 1)) * 100}%`,
        animationDelay: r1 * (maxDelay - minDelay) + minDelay + "s",
        animationDuration: Math.floor(r2 * (maxDuration - minDuration) + minDuration) + "s",
      } as React.CSSProperties
    })
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle])

  return (
    <>
      {[...meteorStyles].map((style, idx) => (
        // Meteor Head
        <span
          key={idx}
          style={{ ...style }}
          className={cn(
            "animate-meteor pointer-events-none absolute size-0.5 rotate-[var(--angle)] rounded-full bg-zinc-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
        >
          {/* Meteor Tail */}
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-zinc-500 to-transparent" />
        </span>
      ))}
    </>
  )
}
