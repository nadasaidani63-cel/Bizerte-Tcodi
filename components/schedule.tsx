"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, Coffee, Trophy, Users, Code, Gamepad2 } from "lucide-react"

function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

export function Schedule() {
  const titleAnimation = useScrollAnimation()
  const scheduleAnimation = useScrollAnimation()
  const daysAnimation = useScrollAnimation()

  const scheduleItems = [
    { time: "12:00", event: "Check-in", icon: Users, type: "arrival" },
    { time: "12:30", event: "Opening Ceremony", icon: Trophy, type: "ceremony" },
    { time: "13:00", event: "Panel Discussion / Workshop", icon: Code, type: "workshop" },
    { time: "14:30", event: "Lunch Break", icon: Coffee, type: "break" },
    { time: "15:30", event: "Workshop", icon: Users, type: "workshop" },
    { time: "17:00", event: "Q&A Session", icon: Users, type: "session" },
    { time: "17:30", event: "Coffee Break 1", icon: Coffee, type: "break" },
    { time: "18:15", event: "Training Session", icon: Code, type: "training" },
    { time: "20:30", event: "Dinner", icon: Coffee, type: "break" },
    { time: "21:30", event: "Games", icon: Gamepad2, type: "activity" },
    { time: "00:00", event: "Contest Start (7hr)", icon: Trophy, type: "contest" },
    { time: "03:00", event: "Coffee Break 2", icon: Coffee, type: "break" },
    { time: "06:00", event: "Blind Hour", icon: Clock, type: "contest" },
    { time: "07:00", event: "End of Contest/Breakfast", icon: Coffee, type: "end" },
    { time: "08:00", event: "Closing Ceremony", icon: Trophy, type: "ceremony" },
  ]

  const getEventColor = (type: string) => {
    const colors = {
      arrival: "from-primary to-accent",
      ceremony: "from-primary to-secondary",
      workshop: "from-chart-1 to-chart-2",
      break: "from-secondary to-accent",
      session: "from-chart-1 to-chart-3",
      training: "from-primary to-chart-1",
      activity: "from-accent to-chart-3",
      contest: "from-destructive to-accent",
      end: "from-secondary to-primary",
    }
    return colors[type as keyof typeof colors] || "from-muted to-muted-foreground"
  }

  const getEventPosition = (index: number, total: number) => {
    const centerX = 50
    const centerY = 50
    const radius = 35 // Distance from center

    // Calculate angle for each event (full circle)
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2 // Start from top

    const x = centerX + Math.cos(angle) * radius
    const y = centerY + Math.sin(angle) * radius

    return { x, y, angle }
  }

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-blue-900/60 to-blue-950/80"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/8 rounded-full blur-2xl"></div>
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div ref={titleAnimation.ref} className={`text-center mb-12 scroll-animate ${titleAnimation.isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-400 bg-clip-text text-transparent title-hover animate-text-glow">
            Event Roadmap
          </h2>
          <p className="text-blue-200/80 text-xl">Your 24-hour coding journey</p>
        </div>

        <div ref={scheduleAnimation.ref} className={`relative h-[600px] md:h-[700px] scroll-animate ${scheduleAnimation.isVisible ? 'animate' : ''}`}>
          {/* Center hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-scale-in">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-2xl border-4 border-secondary/50 animate-glow animate-magical-border">
              <div className="text-center">
                <Trophy className="w-8 h-8 text-primary-foreground mx-auto mb-1" />
                <div className="text-xs font-bold text-primary-foreground">TCODI</div>
                <div className="text-xs text-primary-foreground/80">2.0</div>
              </div>
            </div>
            {/* Pulsing rings around center */}
            <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping animate-magical-border"></div>
            <div
              className="absolute inset-0 rounded-full border border-secondary/20 animate-pulse animate-magical-border"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Connecting lines from center to events */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
              </radialGradient>
            </defs>

            {scheduleItems.map((_, index) => {
              const position = getEventPosition(index, scheduleItems.length)
              return (
                <line
                  key={index}
                  x1="50"
                  y1="50"
                  x2={position.x}
                  y2={position.y}
                  stroke="url(#centerGradient)"
                  strokeWidth="0.2"
                  strokeDasharray="1,1"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              )
            })}
          </svg>

          {/* Event markers positioned in circle */}
          {scheduleItems.map((item, index) => {
            const position = getEventPosition(index, scheduleItems.length)
            const colorClass = getEventColor(item.type)

            return (
              <div
                key={index}
                className="absolute group"
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Event marker */}
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-xl border-3 border-card-foreground/20 hover:scale-110 transition-all duration-300 cursor-pointer relative z-10 animate-magical-border card-hover`}
                >
                  <item.icon className="w-6 h-6 text-primary-foreground" />

                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 animate-pulse animate-glow"></div>
                </div>

                {/* Event details tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-blue-900/95 backdrop-blur-md border border-blue-700/50 rounded-lg p-3 shadow-2xl min-w-[140px]">
                    <div className="text-blue-300 font-mono text-base font-bold mb-1 text-center">{item.time}</div>
                    <div className="text-blue-100 text-base font-medium text-center leading-tight">{item.event}</div>
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-900/95 border-l border-t border-blue-700/50 rotate-45"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Day indicators */}
        <div ref={daysAnimation.ref} className={`flex justify-center gap-6 mt-8 scroll-animate ${daysAnimation.isVisible ? 'animate' : ''}`}>
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:scale-105 transition-transform duration-300 card-hover animate-magical-border">
            Day 1 - September 20
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 rounded-full text-base font-bold shadow-lg hover:scale-105 transition-transform duration-300 card-hover animate-magical-border">
            Day 2 - September 21
          </div>
        </div>
      </div>
    </section>
  )
}
