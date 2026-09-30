"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { SignInDialog, type SignInDialogHandle } from "@/features/auth/components/sign-in-dialog";
import { signInContent } from "@/features/auth/config/sign-in-content";

import type { NavContent, NavLink } from "../config/landing-content";

type SiteNavProps = {
  content: NavContent;
};

const desktopLinkClassName =
  "relative py-2 text-sm text-ink/60 transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-brand after:opacity-0 after:transition-opacity hover:text-ink focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand aria-[current=page]:text-ink aria-[current=page]:after:opacity-100";

const ctaClassName =
  "h-11 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:h-9";

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="size-5">
      <path d="M3.5 5.5h13M3.5 10h13M3.5 14.5h13" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" className="size-5">
      <path d="M5 5l10 10M15 5 5 15" />
    </svg>
  );
}

function NavItem({
  link,
  className,
  onNavigate,
}: {
  link: NavLink;
  className: string;
  onNavigate?: () => void;
}) {
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} aria-current={link.active ? "page" : undefined} className={className} onClick={onNavigate}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} aria-current={link.active ? "page" : undefined} className={className} onClick={onNavigate}>
      {link.label}
    </a>
  );
}

export function SiteNav({ content }: SiteNavProps) {
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const signInRef = useRef<SignInDialogHandle>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-menu-open", open);
    return () => document.documentElement.removeAttribute("data-menu-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    function closeOnDesktop() {
      if (desktop.matches) setOpen(false);
    }
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  function openSignIn() {
    setOpen(false);
    signInRef.current?.open();
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.04] bg-white/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        <Link
          href="/"
          aria-label={content.brand}
          className="inline-flex h-full max-h-16 min-w-0 shrink items-center py-2 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <Image
            src="/images/bm-icon-text.svg"
            alt=""
            width={264}
            height={150}
            className="h-8 w-auto max-w-full sm:h-10 lg:h-11"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {content.links.map((link) => (
            <li key={link.href}>
              <NavItem link={link} className={desktopLinkClassName} />
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 justify-self-end sm:gap-4 lg:gap-6">
          <SignInDialog
            ref={signInRef}
            content={signInContent}
            triggerClassName="hidden cursor-pointer text-sm font-semibold text-ink transition-colors duration-200 hover:text-ink/60 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:inline"
          />
          <a href={content.cta.href} className={`hidden sm:inline-flex ${ctaClassName}`}>
            {content.cta.label}
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? content.menuCloseLabel : content.menuOpenLabel}
            onClick={() => setOpen((current) => !current)}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <button
          type="button"
          tabIndex={-1}
          aria-label={content.menuCloseLabel}
          onClick={closeMenu}
          className="fixed inset-0 top-16 z-40 bg-ink/30 lg:hidden"
        />
      )}

      <div
        id={panelId}
        className={
          open
            ? "relative z-50 min-h-[calc(100dvh-4rem)] border-t border-ink/[0.06] bg-white lg:hidden"
            : "hidden"
        }
      >
        <div className="mx-auto flex max-h-[calc(100dvh-4rem)] w-full max-w-7xl flex-col overflow-y-auto overscroll-contain px-4 pt-2 pb-6 sm:px-6">
          <ul>
            {content.links.map((link) => (
              <li key={link.href} className="border-b border-ink/[0.06]">
                <NavItem
                  link={link}
                  onNavigate={closeMenu}
                  className="flex min-h-12 items-center text-base font-medium text-ink/70 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand aria-[current=page]:font-semibold aria-[current=page]:text-brand"
                />
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={openSignIn}
              className="inline-flex h-11 items-center justify-center rounded-full border border-ink/10 bg-white text-sm font-semibold text-ink transition-colors hover:border-brand/30 hover:bg-brand-soft hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {signInContent.triggerLabel}
            </button>
            <a href={content.cta.href} onClick={closeMenu} className={`inline-flex sm:hidden ${ctaClassName}`}>
              {content.cta.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
