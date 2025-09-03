import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Schedule } from "@/components/schedule"
import { Location } from "@/components/location"
import { LastEdition } from "@/components/last-edition"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="location">
        <Location />
      </section>
      <section id="moments">
        <LastEdition />
      </section>
      <Footer />
    </main>
  )
}
