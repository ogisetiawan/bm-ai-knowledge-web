import Image from "next/image";
import Link from "next/link";

import { SignInDialog } from "@/features/auth/components/sign-in-dialog";
import { signInContent } from "@/features/auth/config/sign-in-content";

import type { NavContent } from "../config/landing-content";

type SiteNavProps = {
  content: NavContent;
};

export function SiteNav({ content }: SiteNavProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.04] bg-white/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto grid h-16 w-full max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-8"
      >
        <Link
          href="/"
          aria-label={content.brand}
          className="inline-flex h-full max-h-16 items-center justify-self-start py-2 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <Image
            src="/images/bm-icon-text.svg"
            alt=""
            width={264}
            height={150}
            className="h-10 w-auto max-w-[min(100%,11rem)] shrink-0 sm:h-11"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {content.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                className="relative py-2 text-sm text-ink/60 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-brand after:opacity-0 after:transition-opacity hover:text-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand aria-[current=page]:text-ink aria-[current=page]:after:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 justify-self-end">
          <SignInDialog
            content={signInContent}
            triggerClassName="hidden cursor-pointer text-sm font-semibold text-ink transition-colors duration-200 hover:text-ink/60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:inline"
          />
          <a
            href={content.cta.href}
            className="inline-flex h-9 items-center rounded-full bg-brand px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {content.cta.label}
          </a>
        </div>
      </nav>
    </header>
  );
}
