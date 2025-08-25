"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Code, Zap, Target } from "lucide-react"

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

export function About() {
  const titleAnimation = useScrollAnimation()
  const featuresAnimation = useScrollAnimation()
  const contentAnimation = useScrollAnimation()

  const features = [
    {
      icon: Trophy,
      title: "Competition",
      description: "Ultimate problem-solving challenge for coding enthusiasts",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Test your skills across multiple programming languages",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Showcase creative solutions to complex problems",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Compete with the best minds in the region",
    },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse animate-particle-float"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse animate-particle-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div ref={titleAnimation.ref} className={`text-center mb-16 scroll-animate ${titleAnimation.isVisible ? 'animate' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent title-hover animate-text-glow">
            About Bizerte Tcodi 2.0
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the second edition of Bizerte Tcodi, now with an Arcane theme! This premier problem-solving
            competition brings together the brightest minds from across the region for an intense 7-hour coding
            challenge.
          </p>
        </div>

        <div ref={featuresAnimation.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 scroll-animate ${featuresAnimation.isVisible ? 'animate' : ''}`}>
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-float card-hover animate-magical-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <feature.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={contentAnimation.ref} className={`bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8 card-hover animate-magical-border scroll-animate ${contentAnimation.isVisible ? 'animate' : ''}`}>
          <h3 className="text-2xl font-bold mb-4 text-center text-secondary title-hover animate-text-glow">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary title-hover">Competition Format</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 7-hour intensive coding challenge</li>
                <li>• Multiple problem-solving rounds</li>
                <li>• Individual and team categories</li>
                <li>• Real-time leaderboard updates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary title-hover">Event Highlights</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Opening ceremony and workshops</li>
                <li>• Panel discussions with industry experts</li>
                <li>• Networking opportunities</li>
                <li>• Prizes and recognition ceremonies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
