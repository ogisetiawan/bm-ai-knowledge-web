"use client"

import { Check, Loader2 } from "lucide-react"

import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
} from "@/components/ui/chain-of-thought"
import { TextShimmer } from "@/components/ui/text-shimmer"

export type ChatThinkingStep = {
  id: string
  title: string
  detail?: string
  status: "complete" | "active"
}

type ChatThinkingProps = {
  steps: ChatThinkingStep[]
}

export function ChatThinking({ steps }: ChatThinkingProps) {
  return (
    <ChainOfThought>
      {steps.map((step) => (
        <ChainOfThoughtStep key={step.id} defaultOpen={step.status === "active"}>
          <ChainOfThoughtTrigger
            leftIcon={
              step.status === "complete" ? (
                <Check className="size-4 text-success" />
              ) : (
                <Loader2 className="size-4 animate-spin" />
              )
            }
          >
            {step.status === "active" ? (
              <TextShimmer className="text-sm font-normal">{step.title}</TextShimmer>
            ) : (
              step.title
            )}
          </ChainOfThoughtTrigger>
          {step.detail ? (
            <ChainOfThoughtContent>
              <ChainOfThoughtItem>{step.detail}</ChainOfThoughtItem>
            </ChainOfThoughtContent>
          ) : null}
        </ChainOfThoughtStep>
      ))}
    </ChainOfThought>
  )
}
