// ─── VIEW: Page composition ──────────────────────────────────────
// Pure assembly — imports sections, no logic here.
import { Cursor }         from '@/components/ui/Cursor'
import { ScrollReveal }   from '@/components/ui/ScrollReveal'
import { Navbar }         from '@/components/layout/Navbar'
import { Footer }         from '@/components/layout/Footer'
import { Hero }           from '@/components/sections/Hero'
import { Ticker }         from '@/components/sections/Ticker'
import { Projects }       from '@/components/sections/Projects'
import { ScrollCarousel } from '@/components/sections/ScrollCarousel'
import { About }          from '@/components/sections/About'
import { Services }       from '@/components/sections/Services'
import { Testimonials }   from '@/components/sections/Testimonials'
import { Clients }        from '@/components/sections/Clients'
import { CTA }            from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Projects />
        <ScrollCarousel />
        <About />
        <Services />
        <Testimonials />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
