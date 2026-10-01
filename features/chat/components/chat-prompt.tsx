"use client";

import { ArrowUp, Globe, Mic, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input";
import { cn } from "@/lib/utils";

type ChatPromptProps = {
  value: string;
  onValueChange: (value: string) => void;
  onSubmit: () => void;
  /** start sits in the centered new-chat cluster. conversation stretches with the chat column. */
  layout?: "start" | "conversation";
};

export function ChatPrompt({
  value,
  onValueChange,
  onSubmit,
  layout = "conversation",
}: ChatPromptProps) {
  return (
    <PromptInput
      value={value}
      onValueChange={onValueChange}
      onSubmit={onSubmit}
      className={cn(
        "rounded-3xl border-border bg-white p-0 pt-1 shadow-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10",
        layout === "start" ? "w-full max-w-3xl" : "w-full",
      )}
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
              <Button type="button" variant="outline" className="rounded-full" aria-label="Web search">
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
              onClick={onSubmit}
              aria-label="Send"
            >
              <ArrowUp />
            </Button>
          </div>
        </PromptInputActions>
      </div>
    </PromptInput>
  );
}
