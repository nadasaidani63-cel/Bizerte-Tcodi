"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

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

export function Footer() {
  const footerAnimation = useScrollAnimation()

  return (
    <footer ref={footerAnimation.ref} className={`bg-card/30 backdrop-blur-sm border-t border-border py-16 px-4 relative overflow-hidden scroll-animate ${footerAnimation.isVisible ? 'animate' : ''}`}>
      {/* Background magical elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse animate-particle-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Event Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary title-hover animate-text-glow">Bizerte Tcodi 2.0</h3>
            <p className="text-muted-foreground mb-4 animate-magic-shimmer">
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
            <h3 className="text-xl font-bold mb-4 text-primary title-hover animate-text-glow">Quick Links</h3>
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
            <h3 className="text-xl font-bold mb-4 text-primary title-hover animate-text-glow">Contact</h3>
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
            <h3 className="text-xl font-bold mb-4 text-primary title-hover animate-text-glow">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent card-hover animate-magical-border"
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
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent card-hover animate-magical-border"
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
            <p className="text-sm text-muted-foreground animate-magic-shimmer">Stay updated with the latest news and announcements!</p>
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
