import Image from "next/image";
import Link from "next/link";

import type { HeroContent } from "../config/landing-content";
import { HeroPrompt } from "./hero-prompt";

type HeroSectionProps = {
  content: HeroContent;
};

function ChatIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M13.5 8a5.5 5.5 0 0 1-8.1 4.85L2.5 13.5l.65-2.9A5.5 5.5 0 1 1 13.5 8Z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        {content.floatingIcons.map((icon) => (
          <div
            key={`${icon.src}-${icon.className}`}
            className={`absolute motion-safe:animate-float ${icon.className}`}
            style={{ animationDelay: icon.delay }}
          >
            <Image
              src={icon.src}
              alt=""
              width={icon.size}
              height={icon.size}
              style={{ width: icon.size, height: icon.size }}
              className="drop-shadow-[0_10px_18px_rgba(20,20,20,0.08)]"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto flex min-h-svh max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-32 lg:px-8">
        <h1 className="text-[44px] leading-[1.02] font-extrabold tracking-[-0.02em] text-ink sm:text-7xl lg:text-[96px] xl:text-[108px] xl:leading-[108px]">
          <span className="block text-brand">{content.brandLine}</span>
          {content.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Link
            href={content.primaryCta.href}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto sm:min-w-44"
          >
            <ChatIcon />
            {content.primaryCta.label}
          </Link>
          <Link
            href={content.secondaryCta.href}
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-6 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand/30 hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto sm:min-w-44"
          >
            {content.secondaryCta.label}
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-10 flex w-full justify-center">
          <HeroPrompt
            label={content.promptLabel}
            placeholder={content.promptPlaceholder}
            examples={content.promptExamples}
            useExampleHint={content.useExampleHint}
          />
        </div>
      </div>
    </section>
  );
}
