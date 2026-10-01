import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/workspace/components/section-placeholder";

export const metadata: Metadata = {
  title: "Help",
};

export default function AccountHelpPage() {
  return (
    <SectionPlaceholder
      title="Help"
      description="Help for this workspace will appear here once the help content is available."
    />
  );
}
