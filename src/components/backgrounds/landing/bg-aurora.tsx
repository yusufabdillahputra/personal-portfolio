'use client'

import * as React from "react";
import {useTheme} from "next-themes";
import Aurora from "@/components/backgrounds/Aurora/Aurora";

export default function BgAurora({...props}: React.ComponentProps<"div">) {
  const {theme, resolvedTheme} = useTheme();
  const auroraColors: () => string[] = (): string[] => {
    const dark: string[] = ["#818cf8", "#000000", "#2dd4bf"];
    const light: string[] = ["#4f46e5", "#ffffff", "#14b8a6"];
    switch (theme) {
      case "dark":
        return dark;
      case "light":
        return light;
      case "system": {
        if (resolvedTheme === 'dark') {
          return dark;
        } else {
          return light;
        }
      }
      default:
        return dark
    }
  }
  return (
    <div {...props}>
      <Aurora
        colorStops={auroraColors()}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
    </div>
  )
}