"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUp, Globe, Mic, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input";

const startIcons = [
  {
    src: "/icons/documents/doc.svg",
    delay: "0s",
    className: "top-[8%] left-[6%] size-8 -rotate-6 sm:size-9",
  },
  {
    src: "/icons/documents/csv.svg",
    delay: "1.2s",
    className: "top-[38%] left-1 hidden size-10 -rotate-12 sm:block sm:size-12",
  },
  {
    src: "/icons/documents/pdf.svg",
    delay: "0.6s",
    className: "bottom-[2%] left-[5%] size-8 -rotate-12 sm:size-10",
  },
  {
    src: "/icons/documents/ai.svg",
    delay: "1.8s",
    className: "top-[6%] right-[6%] size-9 rotate-12 sm:size-11",
  },
  {
    src: "/icons/documents/folder-icon.svg",
    delay: "0.3s",
    className: "top-[42%] right-[4%] hidden size-8 rotate-6 sm:block sm:size-10",
  },
  {
    src: "/icons/documents/ppt.svg",
    delay: "0.3s",
    className: "bottom-[2%] right-[5%] size-8 -rotate-12 sm:size-10",
  },
];

export default function ChatPage() {
  const [value, setValue] = useState("");

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-main">
      <div className="flex flex-1 flex-col items-center justify-center px-4 pb-12">
        <div className="relative isolate w-full max-w-3xl px-12 py-8 sm:px-16 sm:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            {startIcons.map((icon) => (
              <div
                key={icon.src}
                className={`absolute opacity-40 motion-safe:animate-float ${icon.className}`}
                style={{ animationDelay: icon.delay }}
              >
                <Image src={icon.src} alt="" width={28} height={28} className="h-full w-full" />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-5">
            <div className="relative z-10 flex items-center gap-3 sm:gap-4">
              <Image
                src="/images/bm-icon.svg"
                alt=""
                width={264}
                height={150}
                priority
                className="h-10 w-auto shrink-0 sm:h-11"
              />
              <div className="min-w-0 text-left">
                <h1 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  BM Knowledge Assistant
                </h1>
                <p className="mt-0.5 text-sm text-text-secondary">
                  Ask, find, and understand your company knowledge
                </p>
              </div>
            </div>
            <PromptInput
              value={value}
              onValueChange={setValue}
              onSubmit={() => setValue("")}
              className="relative z-10 w-full rounded-3xl border-border bg-white p-0 pt-1 shadow-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10"
            >
            <div className="flex flex-col">
              <PromptInputTextarea
                placeholder="Ask anything about your documents"
                className="min-h-11 pt-3 pl-4 text-base leading-[1.3] text-foreground placeholder:text-text-muted"
              />
              <PromptInputActions className="mt-5 flex w-full items-center justify-between gap-2 px-3 pb-3">
                <div className="flex items-center gap-2">
                  <PromptInputAction tooltip="Add a new action">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      aria-label="Add a new action"
                    >
                      <Plus />
                    </Button>
                  </PromptInputAction>
                  <PromptInputAction tooltip="Web search">
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full"
                      aria-label="Web search"
                    >
                      <Globe />
                      Web search
                    </Button>
                  </PromptInputAction>
                  <PromptInputAction tooltip="More actions">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      aria-label="More actions"
                    >
                      <MoreHorizontal />
                    </Button>
                  </PromptInputAction>
                </div>
                <div className="flex items-center gap-2">
                  <PromptInputAction tooltip="Voice input">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      aria-label="Voice input"
                    >
                      <Mic />
                    </Button>
                  </PromptInputAction>
                  <Button
                    type="button"
                    size="icon"
                    className="rounded-full"
                    disabled={!value.trim()}
                    onClick={() => setValue("")}
                    aria-label="Send"
                  >
                    <ArrowUp />
                  </Button>
                </div>
              </PromptInputActions>
            </div>
          </PromptInput>
          </div>
        </div>
      </div>
    </div>
  );
}
