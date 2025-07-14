import * as React from "react";
import {cn} from "@/lib/utils";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {useTranslations} from "next-intl";
import {FileDown, FileHeart} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function HeroSection({className, ...props}: React.ComponentProps<"section">) {
  const t = useTranslations("landing.hero")
  return (
    <section aria-label="Hero Section" className={cn("relative bottom-5 w-full z-1", className)} {...props}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-5">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border border-gray-100 dark:border-gray-900 [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border border-gray-200 dark:border-gray-800 p-16 md:p-32">
                <div className="size-full rounded-full border border-gray-300 dark:border-gray-700"></div>
              </div>
            </div>
            <div className="mx-auto flex items-center justify-center rounded-full border">
              <Avatar className="border-2 border-background ring-2 ring-primary/10 size-33">
                <AvatarImage src="/img/profile_photo.jpg" className="object-cover object-top"
                             alt="Profile Photo Image"/>
              </Avatar>
            </div>
            <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium text-balance md:text-6xl">
              {t('h1')}
            </h2>
            <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
              {t('p1')}
            </p>
            <p className="mx-auto px-10 sm:px-24 max-w-2xl text-center text-muted-foreground md:text-lg">
              {t('p2')}
            </p>
            <div className="flex mx-10 flex-col sm:flex-row items-center justify-center gap-3 pt-3 pb-12">
              <Button asChild>
                <Link
                  href="/pdf/Resume%20Yusuf%20Abdillah%20Putra.pdf"
                  target="_blank"
                  download="Resume Yusuf Abdillah Putra.pdf"
                  className="w-full sm:w-auto group hover:bg-primary-100 dark:hover:bg-muted transition-colors duration-300"
                >
                  <span
                    className="group-hover:translate-x-0.5 dark:text-white transition-transform duration-300">{t('btn-1')}</span>
                  <FileDown
                    className="ml-2 size-4 group-hover:translate-x-1.5 dark:text-white transition-transform duration-300"
                  />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full cursor-pointer sm:w-auto group hover:bg-primary-100 dark:hover:bg-muted transition-colors duration-300"
              >
                <span
                  className="group-hover:translate-x-0.5 transition-transform duration-300 dark:text-white">{t('btn-2')}</span>
                <FileHeart
                  className="ml-2 size-4 text-black dark:text-white group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}