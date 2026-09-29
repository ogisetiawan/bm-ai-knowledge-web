"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type TypewriterOptions = {
  enabled?: boolean;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
  gapMs?: number;
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

export function useTypewriter(
  phrases: string[],
  { enabled = true, typeMs = 45, deleteMs = 18, holdMs = 2200, gapMs = 400 }: TypewriterOptions = {},
) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const phrase = phrases.length > 0 ? phrases[index % phrases.length] : "";
  const animate = enabled && !reducedMotion && phrase.length > 0;

  useEffect(() => {
    if (!animate) return;

    let delay: number;
    let step: () => void;

    if (!deleting && length < phrase.length) {
      delay = typeMs;
      step = () => setLength((value) => value + 1);
    } else if (!deleting) {
      delay = holdMs;
      step = () => setDeleting(true);
    } else if (length > 0) {
      delay = deleteMs;
      step = () => setLength((value) => value - 1);
    } else {
      delay = gapMs;
      step = () => {
        setDeleting(false);
        setIndex((value) => (value + 1) % phrases.length);
      };
    }

    const timer = window.setTimeout(step, delay);
    return () => window.clearTimeout(timer);
  }, [animate, deleting, length, phrase, phrases.length, typeMs, deleteMs, holdMs, gapMs]);

  return {
    phrase,
    text: reducedMotion ? phrase : phrase.slice(0, length),
    animating: animate,
  };
}
