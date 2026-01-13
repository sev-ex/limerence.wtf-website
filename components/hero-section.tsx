"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToDiscord = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 relative">
      <div
        className={`text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance">
          Dein neuer{" "}
          <span className="text-primary relative">
            Lieblingsort
            <span className="absolute -inset-2 bg-primary/10 blur-2xl -z-10 rounded-full" />
          </span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto text-pretty">
          Eine deutsche Community, in der du einfach du selbst sein kannst.
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToDiscord}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  )
}
