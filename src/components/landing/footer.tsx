import * as React from "react"
import {cn} from "@/lib/utils"
import {useTranslations} from 'next-intl';
import Link from 'next/link'
import Image from 'next/image'


export function Footer({className, ...props}: React.ComponentProps<"footer">) {
  const t = useTranslations('landing');
  const tg = useTranslations('global');
  return (
    <footer aria-label="Main Footer" className={cn("border-t mb-16 pt-8 w-full", className)} {...props}>
      <div className="container mx-auto">
        <div
          className="flex flex-col gap-y-5 px-10 sm:flex-row sm:justify-between sm:items-center sm:gap-x-72 sm:px-0 sm:gap-y-0">
          <div>
            <ul className="flex gap-4">
              <li>
                <Link
                  className="flex items-center gap-1"
                  href="https://github.com/yusufabdillahputra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image width={32} height={32} className="absolute scale-0 size-8 dark:scale-100" src="/img/brand/github_dark.svg" alt="Github Icon Dark"/>
                  <Image width={32} height={32} className="size-8 dark:scale-0" src="/img/brand/github.svg" alt="Github Icon"/>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1"
                  href="https://www.linkedin.com/in/yusufabdillahputra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image width={32} height={32} className="absolute scale-0 size-8 dark:scale-100" src="/img/brand/linkedin_dark.svg" alt="Linkedin Icon Dark"/>
                  <Image width={32} height={32} className="size-8 dark:scale-0" src="/img/brand/linkedin.svg" alt="Linkedin Icon"/>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1"
                  href="https://www.instagram.com/yusufabdillahputra/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image width={32} height={32} className="absolute scale-0 size-8 dark:scale-100" src="/img/brand/instagram_dark.svg"
                         alt="Instagram Icon Dark"/>
                  <Image width={32} height={32} className="size-8 dark:scale-0" src="/img/brand/instagram.svg" alt="Instagram Icon"/>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              {t("footer.p1")+" "}
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Next JS"}
              </Link>
              {" "+tg("&")+" "}
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Tailwind CSS"}
              </Link>
              {" "+t("footer.p2")+" "}
              <Link
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Shadcn"}
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              {" "+t("footer.p3")+" "}
              <Link
                href="https://lucide.dev/icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Lucide"}
              </Link>
              {" "+tg("&")+" "}
              <Link
                href="https://icones.js.org/collection/line-md"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Material Line Icon"}
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              {" "+t("footer.p4")+" "}
              <Link
                href="https://fonts.google.com/specimen/Geist"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Geist"}
              </Link>
              {" "}typeface
            </p>
            <p className="text-sm text-muted-foreground">
              {" "+t("footer.p5")+" "}
              <Link
                href="https://vercel.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {"Vercel"}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}