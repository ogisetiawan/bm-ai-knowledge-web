import type { Metadata } from "next";

import { ConversationHistory } from "@/features/conversation/components/conversation-history";
import { sampleSessions } from "@/features/conversation/config/sample-sessions";

export const metadata: Metadata = {
  title: "History",
};

export default function ChatHistoryPage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col bg-bg-main">
      <header className="shrink-0 border-b border-border px-6 py-4">
        <h1 className="text-lg font-semibold text-foreground">History</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">
          Sample sessions. Open a title to continue in chat. Search, rename, and delete stay on this page until the gateway history API is connected.
        </p>
      </header>

      <div className="flex-1 overflow-y-auto">
        <ConversationHistory sessions={sampleSessions()} />
      </div>
    </div>
  );
}
