"use client";

import { useState } from "react";
import Image from "next/image";

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/ui/chat-container";
import { Message, MessageContent } from "@/components/ui/message";
import { PromptSuggestion } from "@/components/ui/prompt-suggestion";
import { SystemMessage } from "@/components/ui/system-message";
import { Source, SourceContent, SourceTrigger } from "@/components/ui/source";
import { AssistantMessageActions } from "@/features/chat/components/assistant-message-actions";
import { ChatPrompt } from "@/features/chat/components/chat-prompt";
import { ChatThinking } from "@/features/chat/components/chat-thinking";

const demoAnswer =
  "Based on the available SDS, **Sodium Benzoate** should be handled with standard lab precautions.\n\n- Flash point and physical constants appear in the cited SDS\n- Use PPE appropriate for chemical handling\n- Follow local SOP for spill response";

const demoSuggestions = [
  "What are the handling precautions?",
  "Summarize first-aid steps",
  "Which document covers storage?",
];

export default function ChatDemoPage() {
  const [value, setValue] = useState("");

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-main">
      <header className="shrink-0 border-b border-border px-6 py-4">
        <h1 className="text-lg font-semibold text-foreground">Conversation Demo - AI Chat</h1>
      </header>

      <ChatContainerRoot className="relative flex-1 px-6">
        <ChatContainerContent className="gap-6 py-6">
          <Message className="justify-end">
            <MessageContent className="max-w-[85%] bg-primary text-white prose-invert">
              What is the flash point and handling guidance for Sodium Benzoate?
            </MessageContent>
          </Message>

          <Message className="w-full max-w-[85%] flex-col items-start">
            <div className="w-full rounded-lg border border-border bg-bg-card text-foreground shadow-sm">
              <MessageContent markdown className="border-0 bg-transparent shadow-none">
                {demoAnswer}
              </MessageContent>
              <div className="px-3 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                    Citations
                  </span>
                  <span className="h-px flex-1 bg-border" />
                </div>
                <div className="mt-2">
                  <Source href="https://example.com/docs/sodium-benzoate-sds.pdf">
                    <SourceTrigger
                      label="sodium-benzoate-sds.pdf"
                      icon={
                        <Image
                          src="/icons/documents/pdf.svg"
                          alt=""
                          width={16}
                          height={16}
                          className="size-4 shrink-0"
                        />
                      }
                      className="h-7 max-w-56 rounded-md border border-border bg-muted px-2 text-foreground hover:bg-bg-sidebar hover:text-foreground"
                    />
                    <SourceContent
                      title="Sodium Benzoate SDS v2.1"
                      description="Safety data sheet with flash point, density, and handling guidance."
                    />
                  </Source>
                </div>
                <div className="flex justify-end">
                  <AssistantMessageActions content={demoAnswer.replace(/\*\*/g, "")} />
                </div>
              </div>
            </div>
          </Message>

          <ChatThinking
            steps={[
              {
                id: "read",
                title: "Reading your question",
                status: "complete",
              },
              {
                id: "respond",
                title: "Preparing a response",
                detail: "Waiting for the gateway response.",
                status: "active",
              },
            ]}
          />
        </ChatContainerContent>
      </ChatContainerRoot>
      <SystemMessage
        variant="action"
        isIconHidden
        className="mb-6 mx-auto w-fit justify-center border-none bg-transparent p-0 text-center text-text-muted"
      >
        <span className="text-text-muted italic text-xs">AI responses may contain errors. Always verify with source documents.</span>
      </SystemMessage>
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
        <ChatPrompt
          layout="conversation"
          value={value}
          onValueChange={setValue}
          onSubmit={() => setValue("")}
        />
      </div>
    </div>
  );
}
