"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

function MagicalParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 4
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="magic-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle animate-particle-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  )
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative">
          <img
            src="/images/banner.jpg"
            alt="Bizerte Tcodi 2.0 Official Banner"
            className={`w-full h-auto object-cover transition-all duration-1000 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </div>
      </section>

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
        <MagicalParticles />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float animate-magical-border" />
          <div
            className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-400/20 rounded-full blur-xl animate-float animate-magical-border"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/30 rounded-full blur-lg animate-pulse-glow animate-magical-border" />
          <div
            className="absolute top-1/3 right-1/3 w-40 h-40 bg-indigo-500/15 rounded-full blur-2xl animate-float animate-magical-border"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/2 w-28 h-28 bg-sky-400/25 rounded-full blur-xl animate-pulse-glow animate-magical-border"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto py-8 transition-all duration-1000 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
        }`}>
          <div className="mb-8" style={{ animationDelay: "0.2s" }}>
            <p className="text-2xl md:text-3xl text-yellow-400 font-bold mb-3 animate-glow animate-text-glow title-hover cursor-default">
              Forge the Future - One Line of Code at a Time
            </p>
            <p className="text-xl md:text-2xl text-accent font-semibold mb-6 title-hover cursor-default">
              ARCANE EDITION
            </p>
          </div>

          <div className={`flex flex-wrap justify-center gap-4 mb-8 text-base transition-all duration-1000 ${
            isVisible ? 'animate-slide-left' : 'opacity-0 translate-x-10'
          }`} style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-yellow-400/30 card-hover animate-magical-border">
              <Calendar className="w-4 h-4 text-yellow-400" />
              <span className="text-white" style={{ fontSize: "25px" }}>
                September 20-21, 2024
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-yellow-400/30 card-hover animate-magical-border">
              <MapPin className="w-4 h-4 text-yellow-400" />
              <span className="text-white" style={{ fontSize: "25px" }}>
                ISET Bizerte University
              </span>
            </div>
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-yellow-400/30 card-hover animate-magical-border">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="text-white" style={{ fontSize: "25px" }}>
                Problem Solving Competition
              </span>
            </div>
          </div>

          <div className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-1000 ${
            isVisible ? 'animate-slide-right' : 'opacity-0 translate-x-10'
          }`} style={{ animationDelay: "0.6s" }}>
            <Button
              size="default"
              className="text-base px-6 py-3 bg-yellow-400 text-black hover:bg-yellow-500 animate-glow card-hover animate-magical-border relative overflow-hidden"
              style={{ fontSize: "20px" }}
            >
              <span className="relative z-10">
              Registeration soon
              </span>
            </Button>
            <a
              href="https://www.facebook.com/profile.php?id=61557634144817"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="default"
                className="text-base px-6 py-3 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent card-hover animate-magical-border relative overflow-hidden"
                style={{ fontSize: "20px" }}
              >
                <span className="relative z-10">
                Learn More
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
