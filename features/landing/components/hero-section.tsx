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
      className="size-4 md:size-[1.125rem] lg:size-5"
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
      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 md:size-[1.125rem] lg:size-5"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
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
              className="h-full w-full drop-shadow-[0_8px_14px_rgba(20,20,20,0.08)]"
            />
          </div>
        ))}
      </div>

      <div className="mx-auto flex min-h-svh w-full max-w-7xl flex-col items-center px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <h1 className="w-full text-[1.625rem] leading-[1.12] font-extrabold tracking-[-0.02em] text-balance text-ink min-[380px]:text-[1.875rem] sm:text-[2.5rem] sm:leading-[1.06] md:text-[3.25rem] lg:text-[3.75rem] lg:leading-[1.02] xl:text-[5.25rem] xl:leading-[0.98] 2xl:text-[6.75rem] 2xl:leading-none">
          <span className="block text-brand">{content.brandLine}</span>
          {content.titleLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-6 flex w-full max-w-xs flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:max-w-none sm:flex-row sm:items-center md:gap-3 lg:mt-10">
          <Link
            href={content.primaryCta.href}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand px-4 text-[0.8125rem] font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto sm:min-w-40 sm:px-5 sm:text-sm md:h-12 md:min-w-48 md:px-6 md:text-base lg:h-[3.25rem] lg:min-w-52 lg:px-7 lg:text-[1.0625rem]"
          >
            <ChatIcon />
            {content.primaryCta.label}
          </Link>
          <Link
            href={content.secondaryCta.href}
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-4 text-[0.8125rem] font-semibold text-ink transition-colors duration-200 hover:border-brand/30 hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:w-auto sm:min-w-40 sm:px-5 sm:text-sm md:h-12 md:min-w-48 md:px-6 md:text-base lg:h-[3.25rem] lg:min-w-52 lg:px-7 lg:text-[1.0625rem]"
          >
            {content.secondaryCta.label}
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-8 flex w-full justify-center sm:mt-10">
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
