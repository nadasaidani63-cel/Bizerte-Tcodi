import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Bizerte Tcodi 2.0</h3>
            <p className="text-muted-foreground mb-4">
              The ultimate problem-solving competition returns with the Arcane edition.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>ISET Bizerte University</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>September 20-21, 2024</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">
                  About Event
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-secondary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-secondary transition-colors">
                  Location
                </a>
              </li>
              <li>
                <a href="#register" className="hover:text-secondary transition-colors">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nada_saidani@ieee.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+216 99 181 683</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <a
                  href="https://www.instagram.com/bizerte_tcodi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61557634144817"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Stay updated with the latest news and announcements!</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Bizerte Tcodi. All rights reserved. | Powered by the Arcane spirit of innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
