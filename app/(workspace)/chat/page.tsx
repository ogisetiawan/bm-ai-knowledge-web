"use client";

import { useState } from "react";
import { ArrowUp, Globe, Mic, MoreHorizontal, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/ui/chat-container";
import { Loader } from "@/components/ui/loader";
import { Message, MessageContent } from "@/components/ui/message";
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input";
import { PromptSuggestion } from "@/components/ui/prompt-suggestion";
import { Source, SourceContent, SourceTrigger } from "@/components/ui/source";

const demoSuggestions = [
  "What are the handling precautions?",
  "Summarize first-aid steps",
  "Which document covers storage?",
];

export default function ChatPage() {
  const [value, setValue] = useState("");

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-main">
      <header className="shrink-0 border-b border-border px-6 py-4">
        <h1 className="text-lg font-semibold text-foreground">AI Chat</h1>
      </header>

      <ChatContainerRoot className="relative flex-1 px-6">
        <ChatContainerContent className="gap-6 py-6">
          <Message className="justify-end">
            <MessageContent className="max-w-[85%] bg-primary text-white prose-invert">
              What is the flash point and handling guidance for Sodium Benzoate?
            </MessageContent>
          </Message>

          <Message className="flex-col items-start gap-3">
            <MessageContent
              markdown
              className="max-w-[85%] border border-border bg-bg-card text-foreground shadow-sm"
            >
              {
                "Based on the available SDS, **Sodium Benzoate** should be handled with standard lab precautions.\n\n- Flash point and physical constants appear in the cited SDS\n- Use PPE appropriate for chemical handling\n- Follow local SOP for spill response"
              }
            </MessageContent>

            <div className="flex flex-wrap items-center gap-2">
              <Source href="https://example.com/docs/sodium-benzoate-sds.pdf">
                <SourceTrigger label="SDS v2.1" />
                <SourceContent
                  title="Sodium Benzoate SDS v2.1"
                  description="Safety data sheet with flash point, density, and handling guidance."
                />
              </Source>
              <span className="text-xs text-muted-foreground">Demo response — not live API</span>
            </div>
          </Message>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader variant="typing" size="sm" />
            <span>AI is thinking… (demo)</span>
          </div>
        </ChatContainerContent>
      </ChatContainerRoot>

      <div className="shrink-0 space-y-3 border-t border-border bg-bg-main px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {demoSuggestions.map((suggestion) => (
            <PromptSuggestion
              key={suggestion}
              type="button"
              variant="outline"
              size="sm"
              className="h-auto rounded-full border-border bg-white px-3 py-1.5 text-xs font-medium text-foreground hover:bg-bg-sidebar"
              onClick={() => setValue(suggestion)}
            >
              {suggestion}
            </PromptSuggestion>
          ))}
        </div>

        <PromptInput
          value={value}
          onValueChange={setValue}
          onSubmit={() => setValue("")}
          className="rounded-3xl border-border bg-white p-0 pt-1 shadow-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10"
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
  );
}
