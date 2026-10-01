import { Plus, Share2, FileText, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const demoSources = [
  { id: "1", title: "Sodium Benzoate SDS v2.1", checked: true },
  { id: "2", title: "Handling Precautions Guide", checked: true },
];

export function ChatRightPanel() {
  return (
    <aside className="hidden h-full w-72 shrink-0 flex-col border-l border-border bg-background lg:flex">
      <div className="flex gap-2 border-b border-border p-3">
        <Button type="button" variant="outline" size="sm" className="flex-1 justify-start gap-1.5">
          <Plus className="size-4" aria-hidden="true" />
          New Chat
        </Button>
        <Button type="button" variant="outline" size="icon-sm" aria-label="Share">
          <Share2 className="size-4" />
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        <section>
          <h2 className="text-sm font-semibold text-foreground">Sources</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Documents used for the current answer.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {demoSources.map((source) => (
              <li
                key={source.id}
                className="flex items-start gap-2 rounded-lg border border-border bg-card p-2.5"
              >
                <FileText className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="min-w-0 flex-1 text-sm text-foreground">{source.title}</span>
                {source.checked && (
                  <Check className="size-4 shrink-0 text-primary" aria-label="Cited" />
                )}
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        <section>
          <h2 className="text-sm font-semibold text-foreground">Filters</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            Narrow knowledge sources when the API supports filtering.
          </p>
          <Button type="button" className="mt-3 w-full" disabled>
            Apply Filters
          </Button>
        </section>
      </div>
    </aside>
  );
}
