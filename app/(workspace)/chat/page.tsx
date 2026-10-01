"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";

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
    <div className="flex min-h-0 flex-1 flex-col">
      <header className="shrink-0 border-b border-border px-6 py-4">
        <h1 className="text-lg font-semibold text-foreground">AI Chat</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Ask questions in natural language against authorized knowledge sources.
        </p>
      </header>

      <ChatContainerRoot className="relative flex-1 px-6">
        <ChatContainerContent className="gap-6 py-6">
          <Message className="justify-end">
            <MessageContent className="max-w-[85%] bg-primary text-primary-foreground prose-invert">
              What is the flash point and handling guidance for Sodium Benzoate?
            </MessageContent>
          </Message>

          <Message className="flex-col items-start gap-3">
            <MessageContent
              markdown
              className="max-w-[85%] border border-border bg-card text-foreground"
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

      <div className="shrink-0 space-y-3 border-t border-border bg-background px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {demoSuggestions.map((suggestion) => (
            <PromptSuggestion
              key={suggestion}
              type="button"
              variant="outline"
              size="sm"
              className="h-auto rounded-full border-border px-3 py-1.5 text-xs font-medium text-foreground"
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
          className="rounded-[20px] border-border shadow-[0_8px_30px_-12px_rgba(6,53,122,0.14)]"
        >
          <PromptInputTextarea
            placeholder="Ask anything about your documents"
            className="text-foreground placeholder:text-muted-foreground"
          />
          <PromptInputActions className="justify-end pt-1">
            <PromptInputAction tooltip="Send">
              <Button
                type="button"
                size="icon-sm"
                className="rounded-full"
                disabled={!value.trim()}
                onClick={() => setValue("")}
                aria-label="Send"
              >
                <ArrowUp className="size-4" />
              </Button>
            </PromptInputAction>
          </PromptInputActions>
        </PromptInput>
      </div>
    </div>
  );
}
