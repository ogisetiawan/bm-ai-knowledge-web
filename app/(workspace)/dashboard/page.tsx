import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/app-shell/components/section-placeholder";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <SectionPlaceholder
      title="Dashboard"
      description="Shortcuts to frequently used knowledge, tools, and AI functions. Activity and usage summaries stay hidden until those modules are enabled."
    />
  );
}
