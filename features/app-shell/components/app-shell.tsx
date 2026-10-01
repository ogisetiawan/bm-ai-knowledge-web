"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { Menu, PanelLeftOpen } from "lucide-react";
import { usePathname } from "next/navigation";

import { AppSidebar } from "@/features/app-shell/components/app-sidebar";
import { ChatRightPanel } from "@/features/app-shell/components/chat-right-panel";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const drawerId = useId();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const showContextPanel = pathname === "/chat";

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-menu-open", drawerOpen);
    return () => document.documentElement.removeAttribute("data-menu-open");
  }, [drawerOpen]);

  useEffect(() => {
    if (!drawerOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setDrawerOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  return (
    <div className="flex h-dvh min-h-0 w-full overflow-hidden bg-background text-foreground">
      {sidebarOpen ? (
        <div className="hidden h-full md:flex">
          <AppSidebar onCollapse={() => setSidebarOpen(false)} />
        </div>
      ) : (
        <div className="hidden h-full w-12 shrink-0 flex-col items-center border-r border-sidebar-border bg-sidebar pt-3 md:flex">
          <button
            type="button"
            aria-expanded={false}
            aria-label="Open sidebar"
            onClick={() => setSidebarOpen(true)}
            className="inline-flex size-8 items-center justify-center rounded-sm text-foreground hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <PanelLeftOpen className="size-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {drawerOpen ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            className="fixed inset-0 z-40 bg-[#141414]/30 md:hidden"
          />
          <div id={drawerId} className="fixed inset-y-0 left-0 z-50 flex md:hidden">
            <AppSidebar onClose={() => setDrawerOpen(false)} />
          </div>
        </>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-background px-3 md:hidden">
          <button
            type="button"
            aria-expanded={drawerOpen}
            aria-controls={drawerOpen ? drawerId : undefined}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            onClick={() => setDrawerOpen((current) => !current)}
            className="inline-flex size-10 items-center justify-center rounded-sm text-foreground hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <Image
            src="/images/bm-icon.svg"
            alt="BM Knowledge"
            width={264}
            height={150}
            className="h-7 w-auto"
          />
        </div>
        {children}
      </div>

      {/* {showContextPanel ? <ChatRightPanel /> : null} */}
    </div>
  );
}
