import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Code, Zap, Target } from "lucide-react"

export function About() {
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Bizerte Tcodi 2.0
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Welcome to the second edition of Bizerte Tcodi, now with an Arcane theme! This premier problem-solving
            competition brings together the brightest minds from across the region for an intense 7-hour coding
            challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 animate-float"
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

        <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-center text-secondary">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Competition Format</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 7-hour intensive coding challenge</li>
                <li>• Multiple problem-solving rounds</li>
                <li>• Individual and team categories</li>
                <li>• Real-time leaderboard updates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-primary">Event Highlights</h4>
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
