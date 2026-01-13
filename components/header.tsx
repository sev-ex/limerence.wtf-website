"use client"

import { useEffect, useState } from "react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <a
          href="https://limerence.wtf"
          className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          limerence.wtf
        </a>
      </div>
    </header>
  )
}
