import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/app-shell/components/section-placeholder";

export const metadata: Metadata = {
  title: "Document Repository",
};

export default function DocumentRepositoryPage() {
  return (
    <SectionPlaceholder
      title="Document Repository"
      description="Browse and open documents according to your access permissions. The document list will appear here once the gateway contract is connected."
    />
  );
}