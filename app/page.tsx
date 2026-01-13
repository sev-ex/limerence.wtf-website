import { DiscordPreview } from "@/components/discord-preview"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-[200vh] bg-background relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <section className="flex flex-col items-center justify-center min-h-screen px-4 py-20">
          <DiscordPreview />
        </section>
        <Footer />
      </div>
    </main>
  )
}
