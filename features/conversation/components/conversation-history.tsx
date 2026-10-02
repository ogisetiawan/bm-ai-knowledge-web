"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { MoreHorizontal, Pencil, Search, Trash2 } from "lucide-react";
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";

import type { ConversationSession } from "@/features/conversation/lib/group-sessions";
import { groupSessions } from "@/features/conversation/lib/group-sessions";

type ConversationHistoryProps = {
  sessions: ConversationSession[];
};

const menuItemClassName =
  "flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-foreground outline-none select-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground";

export function ConversationHistory({ sessions }: ConversationHistoryProps) {
  const [items, setItems] = useState(sessions);
  const [query, setQuery] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState("");
  const cancelRename = useRef(false);

  const normalizedQuery = query.trim().toLowerCase();
  const visible = normalizedQuery
    ? items.filter((session) => session.title.toLowerCase().includes(normalizedQuery))
    : items;
  const groups = groupSessions(visible);

  function startRename(session: ConversationSession) {
    setEditingId(session.id);
    setDraft(session.title);
  }

  function saveRename(id: string) {
    if (cancelRename.current) {
      cancelRename.current = false;
      return;
    }
    const title = draft.trim();
    setEditingId(null);
    if (!title) return;
    setItems((current) =>
      current.map((session) => (session.id === id ? { ...session, title } : session)),
    );
  }

  function deleteSession(id: string) {
    setItems((current) => current.filter((session) => session.id !== id));
    if (editingId === id) setEditingId(null);
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-6">
      <label className="relative block">
        <span className="sr-only">Search sessions</span>
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search sessions"
          className="h-10 w-full rounded-lg border border-border bg-white pr-3 pl-9 text-sm text-foreground outline-none placeholder:text-text-muted focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10"
        />
      </label>

      {groups.length === 0 ? (
        <p className="px-3 text-sm text-muted-foreground">
          {items.length === 0 ? "No sessions yet." : "No sessions match your search."}
        </p>
      ) : (
        groups.map((group) => (
          <section key={group.id} aria-labelledby={`history-${group.id}`}>
            <h2 id={`history-${group.id}`} className="px-3 text-xs font-semibold text-muted-foreground">
              {group.label}
            </h2>
            <ul className="mt-1">
              {group.sessions.map((session) => (
                <li key={session.id} className="group flex items-center gap-1 rounded-lg hover:bg-bg-card">
                  {editingId === session.id ? (
                    <input
                      value={draft}
                      aria-label="Session name"
                      autoFocus
                      onChange={(event) => setDraft(event.target.value)}
                      onBlur={() => saveRename(session.id)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          event.preventDefault();
                          saveRename(session.id);
                        }
                        if (event.key === "Escape") {
                          cancelRename.current = true;
                          setEditingId(null);
                        }
                      }}
                      className="h-10 min-w-0 flex-1 rounded-lg border border-border bg-white px-3 text-sm text-foreground outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/10"
                    />
                  ) : (
                    <Link
                      href="/chat/demo"
                      className="min-w-0 flex-1 cursor-pointer truncate px-3 py-2.5 text-sm text-foreground"
                    >
                      {session.title}
                    </Link>
                  )}

                  {editingId !== session.id ? (
                    <DropdownMenuPrimitive.Root>
                      <DropdownMenuPrimitive.Trigger asChild>
                        <button
                          type="button"
                          aria-label={`Actions for ${session.title}`}
                          className="mr-1 inline-flex size-8 shrink-0 items-center justify-center rounded-sm text-muted-foreground opacity-100 hover:bg-white hover:text-foreground focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring data-[state=open]:bg-white data-[state=open]:opacity-100 md:opacity-0 md:group-hover:opacity-100"
                        >
                          <MoreHorizontal className="size-4" aria-hidden="true" />
                        </button>
                      </DropdownMenuPrimitive.Trigger>
                      <DropdownMenuPrimitive.Portal>
                        <DropdownMenuPrimitive.Content
                          align="end"
                          sideOffset={4}
                          className="z-50 w-40 rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-[0_8px_24px_-12px_rgba(6,53,122,0.28)]"
                        >
                          <DropdownMenuPrimitive.Item
                            className={menuItemClassName}
                            onSelect={() => startRename(session)}
                          >
                            <Pencil className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                            Rename
                          </DropdownMenuPrimitive.Item>
                          <DropdownMenuPrimitive.Item
                            className={`${menuItemClassName} text-destructive data-[highlighted]:text-destructive`}
                            onSelect={() => deleteSession(session.id)}
                          >
                            <Trash2 className="size-4 shrink-0" aria-hidden="true" />
                            Delete
                          </DropdownMenuPrimitive.Item>
                        </DropdownMenuPrimitive.Content>
                      </DropdownMenuPrimitive.Portal>
                    </DropdownMenuPrimitive.Root>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
