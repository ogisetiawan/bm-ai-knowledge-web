"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { CircleHelp, LogOut, Settings } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

/** Display stand-in until the gateway session returns the signed-in user. */
const sidebarAccount = {
  name: "Demo User",
};

const menuItemClassName =
  "flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground outline-none select-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function SidebarAccount() {
  const router = useRouter();

  return (
    <div className="shrink-0 border-t border-sidebar-border p-2">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            type="button"
            className="flex min-h-10 w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[state=open]:bg-background"
          >
            <Avatar>
              <AvatarFallback className="bg-primary text-xs font-semibold text-primary-foreground">
                {initials(sidebarAccount.name)}
              </AvatarFallback>
            </Avatar>
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-foreground">
              {sidebarAccount.name}
            </span>
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            side="top"
            align="start"
            sideOffset={8}
            collisionPadding={8}
            className="z-50 w-52 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-[0_8px_24px_-12px_rgba(6,53,122,0.28)]"
          >
            <DropdownMenuPrimitive.Item asChild className={menuItemClassName}>
              <Link href="/account/settings">
                <Settings className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Settings
              </Link>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Item asChild className={menuItemClassName}>
              <Link href="/account/help">
                <CircleHelp className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                Help
              </Link>
            </DropdownMenuPrimitive.Item>
            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-border" />
            <DropdownMenuPrimitive.Item
              className={cn(menuItemClassName, "w-full")}
              onSelect={() => router.push("/")}
            >
              <LogOut className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              Logout
            </DropdownMenuPrimitive.Item>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
}
