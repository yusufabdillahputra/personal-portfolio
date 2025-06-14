import * as React from "react"
import BgAurora from "@/components/backgrounds/landing/bg-aurora";
import Navigation from "@/components/landing/header/navigation";
import HeroSection from "@/components/landing/header/hero-section";

export function Header({...props}: React.ComponentProps<"header">) {
  return (
    <header {...props}>
      <BgAurora/>
      <Navigation/>
      <HeroSection/>
    </header>
  )
}