import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/workspace/components/section-placeholder";

export const metadata: Metadata = {
  title: "Settings",
};

export default function AccountSettingsPage() {
  return (
    <SectionPlaceholder
      title="Settings"
      description="Account settings will appear here once the gateway session contract is connected."
    />
  );
}
