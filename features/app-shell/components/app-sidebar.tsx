"use client";

import { useId, useState, type ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bookmark,
  ChevronRight,
  FolderOpen,
  History,
  LayoutDashboard,
  MessageSquare,
  Package,
  PanelLeftClose,
  Scale,
  ScrollText,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  isNavItemActive,
  navContainsPath,
  visibleAppNav,
  type AppNavItem,
} from "@/features/app-shell/config/nav";
import { SidebarAccount } from "@/features/app-shell/components/sidebar-account";

const iconById: Record<string, ComponentType<{ className?: string }>> = {
  dashboard: LayoutDashboard,
  "ai-knowledge-chat": MessageSquare,
  history: History,
  "saved-answers": Bookmark,
  "product-knowledge": Package,
  "sop-policies": ScrollText,
  regulations: Scale,
  "document-repository": FolderOpen,
};

function BrandLink() {
  return (
    <Link
      href="/dashboard"
      className="inline-flex rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Image
        src="/images/bm-icon.svg"
        alt="BM Knowledge"
        width={264}
        height={150}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}

function NavLink({ item, depth }: { item: AppNavItem; depth: number }) {
  const pathname = usePathname();
  const active = isNavItemActive(pathname, item);
  const Icon = iconById[item.id] ?? MessageSquare;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex min-h-8 items-center gap-2 rounded-sm py-1 pr-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        depth > 0 ? "pl-8" : "pl-2",
        active
          ? "bg-sidebar-accent font-semibold text-sidebar-accent-foreground"
          : "text-sidebar-foreground/80 hover:bg-background hover:text-foreground",
      )}
    >
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span className="truncate">{item.label}</span>
    </Link>
  );
}

function NavBranch({
  item,
  depth,
  listIdPrefix,
  expanded,
  onToggle,
}: {
  item: AppNavItem;
  depth: number;
  listIdPrefix: string;
  expanded: (id: string, containsActive: boolean) => boolean;
  onToggle: (id: string, containsActive: boolean) => void;
}) {
  const pathname = usePathname();
  const children = item.children ?? [];
  const containsActive = navContainsPath(pathname, children) || isNavItemActive(pathname, item);
  const open = expanded(item.id, containsActive);
  const listId = `${listIdPrefix}-${item.id}`;
  const Icon = iconById[item.id] ?? MessageSquare;

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => onToggle(item.id, containsActive)}
        className={cn(
          "flex min-h-8 w-full items-center gap-2 rounded-sm py-1 pr-2 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
          depth > 0 ? "pl-8" : "pl-2",
          containsActive
            ? "font-semibold text-sidebar-accent-foreground"
            : "text-sidebar-foreground/80 hover:bg-background hover:text-foreground",
        )}
      >
        <Icon className="size-4 shrink-0" aria-hidden="true" />
        <span className="min-w-0 flex-1 truncate">{item.label}</span>
        <ChevronRight
          className={cn("size-3.5 shrink-0 transition-transform", open && "rotate-90")}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <NavList
          id={listId}
          items={children}
          depth={depth + 1}
          listIdPrefix={listIdPrefix}
          expanded={expanded}
          onToggle={onToggle}
        />
      ) : null}
    </>
  );
}

function NavList({
  id,
  items,
  depth,
  listIdPrefix,
  expanded,
  onToggle,
}: {
  id?: string;
  items: AppNavItem[];
  depth: number;
  listIdPrefix: string;
  expanded: (id: string, containsActive: boolean) => boolean;
  onToggle: (id: string, containsActive: boolean) => void;
}) {
  return (
    <ul id={id} className="flex flex-col">
      {items.map((item) => (
        <li key={item.id}>
          {item.children && item.children.length > 0 ? (
            <NavBranch
              item={item}
              depth={depth}
              listIdPrefix={listIdPrefix}
              expanded={expanded}
              onToggle={onToggle}
            />
          ) : (
            <NavLink item={item} depth={depth} />
          )}
        </li>
      ))}
    </ul>
  );
}

type AppSidebarProps = {
  onClose?: () => void;
  onCollapse?: () => void;
};

export function AppSidebar({ onClose, onCollapse }: AppSidebarProps) {
  const pathname = usePathname();
  const groups = visibleAppNav();
  const listIdPrefix = useId();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  function expanded(id: string, containsActive: boolean) {
    if (id in openIds) return openIds[id];
    return containsActive;
  }

  function onToggle(id: string, containsActive: boolean) {
    setOpenIds((current) => ({
      ...current,
      [id]: !(id in current ? current[id] : containsActive),
    }));
  }

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex items-center justify-between gap-2 border-b border-sidebar-border px-3 py-3">
        <BrandLink />
        {onCollapse ? (
          <button
            type="button"
            onClick={onCollapse}
            aria-label="Close sidebar"
            className="inline-flex size-8 items-center justify-center rounded-sm text-foreground hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <PanelLeftClose className="size-4" aria-hidden="true" />
          </button>
        ) : null}
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex size-8 items-center justify-center rounded-sm text-foreground hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-2" aria-label="Primary">
        {groups.map((group) => {
          const containsActive = navContainsPath(pathname, group.items);
          const open = expanded(group.id, containsActive);
          const listId = `${listIdPrefix}-${group.id}`;

          return (
            <div key={group.id}>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={listId}
                onClick={() => onToggle(group.id, containsActive)}
                className="flex min-h-8 w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:bg-background hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="min-w-0 flex-1 truncate">{group.label}</span>
                <ChevronRight
                  className={cn("size-3.5 shrink-0 transition-transform", open && "rotate-90")}
                  aria-hidden="true"
                />
              </button>
              {open ? (
                <NavList
                  id={listId}
                  items={group.items}
                  depth={0}
                  listIdPrefix={listIdPrefix}
                  expanded={expanded}
                  onToggle={onToggle}
                />
              ) : null}
            </div>
          );
        })}
      </nav>
      <SidebarAccount />
    </aside>
  );
}
