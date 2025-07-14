"use client"

import * as React from "react"
import {useLocale} from 'next-intl';
import {LanguagesIcon} from 'lucide-react';
import {usePathname} from 'next/navigation';
import {Button} from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {LocaleToggleHeader} from "@/types";
import Link from "next/link";
import Image from "next/image";

export function LocaleToggle() {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const getPathWithLocale = (locale: string): string => {
    const segments = pathname.split('/');
    segments[1] = locale; // ubah [locale] di path
    return segments.join('/') || '/';
  }
  const locales: LocaleToggleHeader[] = [
    {
      code: 'id',
      src: "/img/flag/id.png",
      alt: "Indonesia Flag",
      label: "Indonesia"
    },
    {
      code: 'en',
      src: "/img/flag/en.png",
      alt: "English Flag",
      label: "English"
    }
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
          <LanguagesIcon className="mr-2 h-4 w-4"/>
          <Image width={20} height={0} src={`/img/flag/${currentLocale}.png`} alt="Locale Flag"/>
          <span className="sr-only">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale.code} asChild>
            <Link href={getPathWithLocale(locale.code)} scroll={false}>
              {locale.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
