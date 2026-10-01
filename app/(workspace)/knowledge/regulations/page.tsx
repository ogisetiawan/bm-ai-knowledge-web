import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/app-shell/components/section-placeholder";

export const metadata: Metadata = {
  title: "Regulations",
};

export default function RegulationsPage() {
  return (
    <SectionPlaceholder
      title="Regulations"
      description="Access relevant regulatory, compliance, and industry information. Results will appear here once the gateway search contract is connected."
    />
  );
}
