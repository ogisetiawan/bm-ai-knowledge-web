"use client";

import { useId, useRef, useState, type FormEvent, type KeyboardEvent } from "react";

import { useTypewriter } from "../hooks/use-typewriter";

type HeroPromptProps = {
  label: string;
  placeholder: string;
  examples: string[];
  useExampleHint: string;
  onSubmit?: (prompt: string) => void;
};

function ArrowUpIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M8 13V3M4 7l4-4 4 4" />
    </svg>
  );
}

export function HeroPrompt({ label, placeholder, examples, useExampleHint, onSubmit }: HeroPromptProps) {
  const inputId = useId();
  const hintId = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [prompt, setPrompt] = useState("");
  const isEmpty = prompt.length === 0;
  const canSubmit = prompt.trim().length > 0;
  const example = useTypewriter(examples, { enabled: isEmpty });
  const showExample = isEmpty && example.phrase.length > 0;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;
    onSubmit?.(prompt.trim());
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Tab" && !event.shiftKey && showExample) {
      event.preventDefault();
      setPrompt(example.phrase);
      return;
    }
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <div className="w-full max-w-[680px]">
      <form
        onSubmit={handleSubmit}
        className="relative rounded-[20px] border border-ink/15 bg-white text-left shadow-[0_8px_30px_-12px_rgba(6,53,122,0.14)] transition-colors focus-within:border-brand/40"
      >
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
        <textarea
          id={inputId}
          ref={textareaRef}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={showExample ? undefined : placeholder}
          aria-describedby={showExample ? hintId : undefined}
          rows={3}
          className="relative z-10 block w-full resize-none rounded-[20px] bg-transparent px-5 pt-4 pb-14 text-[15px] leading-6 text-ink placeholder:text-ink/35 focus:outline-none"
        />

        {showExample && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 px-5 pt-4 text-[15px] leading-6 text-ink/40"
          >
            {example.text}
            {example.animating && (
              <span className="ml-0.5 inline-block h-[1.1em] w-px translate-y-[0.2em] animate-pulse bg-brand" />
            )}
          </div>
        )}

        {showExample && (
          <p
            id={hintId}
            className="pointer-events-none absolute bottom-4 left-5 hidden items-center gap-1.5 text-xs text-ink/40 sm:flex"
          >
            <kbd className="rounded border border-ink/15 bg-ink/[0.03] px-1.5 py-px font-sans text-[11px] font-medium text-ink/55">
              Tab
            </kbd>
            {useExampleHint}
          </p>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          aria-label="Send"
          className="absolute right-3 bottom-3 z-10 inline-flex size-8 items-center justify-center rounded-full bg-brand text-white transition-colors duration-200 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:bg-ink/10 disabled:text-ink/40"
        >
          <ArrowUpIcon />
        </button>
      </form>
    </div>
  );
}
