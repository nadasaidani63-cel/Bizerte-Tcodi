"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Clock, Star } from "lucide-react"
import { useState, useEffect } from "react"

export function LastEdition() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const previousEditionImages = [
    {
      src: "/images/previous-edition-1.png",
      alt: "Group photo of participants and organizers on stairs",
    },
    {
      src: "/images/previous-edition-2.png",
      alt: "Students working together during the competition",
    },
    {
      src: "/images/previous-edition-3.png",
      alt: "Participants working intensely during the contest",
    },
    {
      src: "/images/previous-edition-4.png",
      alt: "Large group photo in auditorium with Bizerte Tcodi banner",
    },
    {
      src: "/images/previous-edition-5.png",
      alt: "Group photo of participants showing team spirit",
    },
    {
      src: "/images/previous-edition-6.png",
      alt: "Students coding on laptops in classroom setting",
    },
    {
      src: "/images/previous-edition-7.png",
      alt: "Another group photo showing camaraderie",
    },
    {
      src: "/images/previous-edition-8.png",
      alt: "Students working with mathematical equations on whiteboard",
    },
    {
      src: "/images/previous-edition-9.png",
      alt: "Students collaborating on coding problems",
    },
    {
      src: "/images/previous-edition-10.png",
      alt: "Participants discussing and collaborating",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % previousEditionImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [previousEditionImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % previousEditionImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + previousEditionImages.length) % previousEditionImages.length)
  }

  const stats = [
    { icon: Users, label: "Participants", value: "150+" },
    { icon: Trophy, label: "Winners", value: "9" },
    { icon: Clock, label: "Hours of Competition", value: "7" },
    { icon: Star, label: "Satisfaction Rate", value: "98%" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/40 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-secondary/30 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Moments
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Discover moments from our events, workshops, and activities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {previousEditionImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] animate-float hover:scale-105 transition-all duration-500"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  background: `linear-gradient(135deg, 
                    ${
                      index % 4 === 0
                        ? "#8B5CF6, #EC4899"
                        : index % 4 === 1
                          ? "#3B82F6, #8B5CF6"
                          : index % 4 === 2
                            ? "#EC4899, #F59E0B"
                            : "#10B981, #3B82F6"
                    })`,
                }}
              >
                <div className="absolute inset-0 p-1">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-background">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border text-center animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">Sonic Edition Memories</h3>
            <div className="space-y-4">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Record Participation</h4>
                  <p className="text-muted-foreground">
                    Over 150 talented developers from across Tunisia participated in our inaugural event, making it one
                    of the largest coding competitions in the region.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Innovative Solutions</h4>
                  <p className="text-muted-foreground">
                    Participants showcased incredible creativity and technical skills, solving complex algorithmic
                    challenges with elegant and efficient solutions.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Community Building</h4>
                  <p className="text-muted-foreground">
                    The event fostered strong connections within the tech community, leading to ongoing collaborations
                    and mentorship opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 text-secondary">What's New in 2.0</h3>
            <div className="space-y-4">
              <Card className="bg-primary/10 border-primary/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-primary">Arcane Theme</h4>
                  <p className="text-muted-foreground">
                    This year's edition embraces the mystical world of Arcane, bringing a new level of excitement and
                    visual appeal to the competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-accent/10 border-accent/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-accent">Enhanced Experience</h4>
                  <p className="text-muted-foreground">
                    Based on feedback from the first edition, we've improved the overall experience with better
                    facilities, more workshops, and extended networking opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/10 border-secondary/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 text-secondary">Bigger Prizes</h4>
                  <p className="text-muted-foreground">
                    We've increased the prize pool and added more categories to recognize outstanding achievements in
                    different areas of problem-solving.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
