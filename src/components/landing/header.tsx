import * as React from "react"
import {Separator} from "@/components/ui/separator";
import {ThemeToggle} from "@/components/global/theme-toggle";
import {BgAurora} from "@/components/backgrounds/landing/bg-aurora";

export function Header({...props}: React.ComponentProps<"header">) {
  return (
    <header {...props}>
      <BgAurora/>
      <nav aria-label="Theme Navigation" className="absolute top-0 right-0 z-1 flex flex-row-reverse justify-between p-5">
        <div>
          <div className="flex items-center space-x-4 text-sm">
            <div>ID</div>
            <Separator orientation="vertical"/>
            <ThemeToggle/>
          </div>
        </div>
      </nav>
      <section aria-label="Hero Section" className="absolute top-20 left-0 w-full z-1">
        <h3>Hero</h3>
      </section>
    </header>
  )
}