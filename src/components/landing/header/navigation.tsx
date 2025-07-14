import * as React from "react";
import {cn} from "@/lib/utils"
import {Separator} from "@/components/ui/separator";
import {ThemeToggle} from "@/components/global/theme-toggle";
import {LocaleToggle} from "@/components/global/locale-toggle";


export default function Navigation({className, ...props}: React.ComponentProps<"nav">) {
  return (
    <nav aria-label="Theme Navigation"
         className={cn("absolute top-0 right-0 z-50 flex flex-row-reverse justify-between p-5", className)} {...props}>
      <div>
        <div className="flex items-center space-x-1 sm:space-x-2 text-sm">
          <LocaleToggle/>
          <Separator orientation="vertical"/>
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  )
}