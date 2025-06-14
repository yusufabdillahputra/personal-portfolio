import * as React from "react";
import {cn} from "@/lib/utils"
import {Separator} from "@/components/ui/separator";
import {ThemeToggle} from "@/components/global/theme-toggle";


export default function Navigation({className, ...props}: React.ComponentProps<"nav">) {
  return (
    <nav aria-label="Theme Navigation"
         className={cn("absolute top-0 right-0 z-1 flex flex-row-reverse justify-between p-5", className)} {...props}>
      <div>
        <div className="flex items-center space-x-4 text-sm">
          <div>ID</div>
          <Separator orientation="vertical"/>
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  )
}