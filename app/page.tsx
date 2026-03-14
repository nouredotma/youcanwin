"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import AboutUs from "@/components/about-us"
import Partners from "@/components/partners"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <AboutUs />
      <Partners />
      <Footer />
    </main>
  )
}
