"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { MessageCircle, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DiscordPreview() {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`w-full max-w-md transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-card rounded-2xl overflow-hidden border border-border transition-all duration-500 ${
          isHovered ? "scale-[1.02] shadow-2xl shadow-primary/20" : "shadow-xl shadow-black/50"
        }`}
      >
        {/* Banner */}
        <div className="relative h-32 md:h-40 overflow-hidden">
          <Image
            src="https://cdn.discordapp.com/attachments/1458138040743493739/1459083313879846994/85D874DA-834E-46C8-972E-A1A0814DB953.jpg?ex=696699fa&is=6965487a&hm=64204ff9f5bf5bed66b59e21f8011b5738a68b1978e2eb2fe27e54d246525a5a"
            alt="limerence banner"
            fill
            className={`object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Server Info */}
        <div className="relative px-5 pb-5">
          {/* Profile Picture */}
          <div className="absolute -top-10 left-5">
            <div
              className={`w-20 h-20 rounded-2xl overflow-hidden border-4 border-card transition-transform duration-300 ${
                isHovered ? "rotate-3" : ""
              }`}
            >
              <Image
                src="https://cdn.discordapp.com/attachments/1458138040743493739/1459083259244974121/2cfa856bfbc45b81848654b4ae2a2c39.webp?ex=696699ed&is=6965486d&hm=78e1fcdbd3ac53e09c6d4e7455b466a1a53737a7257c5896426664d918dda0ea"
                alt="limerence server icon"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="pt-12">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-2xl md:text-3xl font-black tracking-tight animate-gradient-text bg-gradient-to-r from-primary via-pink-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                /limerence
              </h2>
            </div>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Der deutsche Community Server für alle, die einfach chillen, quatschen und neue Leute kennenlernen wollen.
              Kein Drama, nur good vibes.
            </p>

            <div className="flex items-center gap-4 mb-5">
              <div className="flex items-center gap-1.5 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-medium">Aktiv</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>24/7</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Chill Talks", "Gaming", "Musik", "Memes", "Voice Chat"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary rounded-full text-xs text-muted-foreground border border-border hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Join Button */}
            <a href="https://discord.gg/limerence" target="_blank" rel="noopener noreferrer" className="block">
              <Button
                className={`w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-base group transition-all duration-300 ${
                  isHovered ? "shadow-lg shadow-primary/30" : ""
                }`}
              >
                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Server beitreten
                <ArrowRight
                  className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className={`absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl transition-opacity duration-500 -z-10 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
