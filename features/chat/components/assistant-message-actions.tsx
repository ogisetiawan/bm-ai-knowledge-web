"use client";

import { useState } from "react";
import { Check, Copy, RefreshCw, ThumbsDown, ThumbsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MessageAction, MessageActions } from "@/components/ui/message";
import { cn } from "@/lib/utils";

type AssistantMessageActionsProps = {
  content: string;
  onRegenerate?: () => void;
};

export function AssistantMessageActions({ content, onRegenerate }: AssistantMessageActionsProps) {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);
  const [copied, setCopied] = useState(false);

  async function copyAnswer() {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  function chooseFeedback(next: "up" | "down") {
    setFeedback((current) => (current === next ? null : next));
  }

  const iconButtonClass =
    "size-8 rounded-md text-muted-foreground hover:bg-muted hover:text-foreground";

  return (
    <MessageActions className="gap-0.5">
      <MessageAction tooltip="Helpful">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-pressed={feedback === "up"}
          aria-label="Helpful"
          onClick={() => chooseFeedback("up")}
          className={cn(iconButtonClass, feedback === "up" && "text-primary")}
        >
          <ThumbsUp />
        </Button>
      </MessageAction>
      <MessageAction tooltip="Not helpful">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-pressed={feedback === "down"}
          aria-label="Not helpful"
          onClick={() => chooseFeedback("down")}
          className={cn(iconButtonClass, feedback === "down" && "text-primary")}
        >
          <ThumbsDown />
        </Button>
      </MessageAction>
      <MessageAction tooltip={copied ? "Copied" : "Copy answer"}>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label={copied ? "Copied" : "Copy answer"}
          onClick={copyAnswer}
          className={iconButtonClass}
        >
          {copied ? <Check /> : <Copy />}
        </Button>
      </MessageAction>
      <MessageAction tooltip="Regenerate">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          aria-label="Regenerate"
          onClick={onRegenerate}
          className={iconButtonClass}
        >
          <RefreshCw />
        </Button>
      </MessageAction>
    </MessageActions>
  );
}
