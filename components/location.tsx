import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation, Phone, Mail } from "lucide-react"

export function Location() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Event Location
          </h2>
          <p className="text-xl text-muted-foreground">
            Join us at ISET Bizerte University for an unforgettable experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">ISET Bizerte University</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Institut Supérieur des Études Technologiques de Bizerte
                      <br />
                      Route de Tunis, Bizerte 7021, Tunisia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Navigation className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Getting There</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      The university is easily accessible by public transport and car. Parking is available on campus
                      for participants.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">+216 99 181 683</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">nada_saidani@ieee.org</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:order-first">
            <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8234567890123!2d9.8734567890123456!3d37.2734567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2b1234567890a%3A0x1234567890abcdef!2sISET%20Bizerte!5e0!3m2!1sen!2stn!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
