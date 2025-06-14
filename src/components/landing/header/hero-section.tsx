import * as React from "react";
import {cn} from "@/lib/utils";

export default function HeroSection({className, ...props}: React.ComponentProps<"section">) {
  return (
    <section aria-label="Hero Section" className={cn("absolute top-20 left-0 w-full z-1", className)} {...props}>
      <h3>Hero</h3>
    </section>
  )
}