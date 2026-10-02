"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, AlertTriangle, Info } from "lucide-react"
import React from "react"

const systemMessageVariants = cva(
  "flex flex-row items-center gap-3 rounded-md border py-2 pr-2 pl-3",
  {
    variants: {
      variant: {
        action: "text-muted-foreground",
        error: "text-destructive",
        warning: "text-warning",
      },
      fill: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "action",
        fill: true,
        class: "border-transparent bg-muted",
      },
      {
        variant: "error",
        fill: true,
        class: "border-transparent bg-error-bg",
      },
      {
        variant: "warning",
        fill: true,
        class: "border-transparent bg-warning-bg",
      },
      {
        variant: "action",
        fill: false,
        class: "border-border",
      },
      {
        variant: "error",
        fill: false,
        class: "border-destructive/40",
      },
      {
        variant: "warning",
        fill: false,
        class: "border-warning/50",
      },
    ],
    defaultVariants: {
      variant: "action",
      fill: false,
    },
  }
)

export type SystemMessageProps = React.ComponentProps<"div"> &
  VariantProps<typeof systemMessageVariants> & {
    icon?: React.ReactNode
    isIconHidden?: boolean
    cta?: {
      label: string
      onClick?: () => void
      variant?: "solid" | "outline" | "ghost"
    }
  }

const ctaVariant = {
  solid: "default",
  outline: "outline",
  ghost: "ghost",
} as const

export function SystemMessage({
  children,
  variant = "action",
  fill = false,
  icon,
  isIconHidden = false,
  cta,
  className,
  ...props
}: SystemMessageProps) {
  const iconToShow = isIconHidden
    ? null
    : (icon ??
      (variant === "error" ? (
        <AlertCircle className="size-4" />
      ) : variant === "warning" ? (
        <AlertTriangle className="size-4" />
      ) : (
        <Info className="size-4" />
      )))

  return (
    <div
      className={cn(systemMessageVariants({ variant, fill }), className)}
      {...props}
    >
      <div className="flex flex-1 flex-row items-center gap-3 leading-normal">
        {iconToShow ? (
          <div className="flex h-[1lh] shrink-0 items-center justify-center self-start">
            {iconToShow}
          </div>
        ) : null}
        <div className="min-w-0 flex-1 text-sm">{children}</div>
      </div>
      {cta ? (
        <Button
          type="button"
          variant={ctaVariant[cta.variant ?? "solid"]}
          size="sm"
          onClick={cta.onClick}
        >
          {cta.label}
        </Button>
      ) : null}
    </div>
  )
}
