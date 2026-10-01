import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/app-shell/components/section-placeholder";

export const metadata: Metadata = {
  title: "SOP & Policies",
};

export default function PoliciesPage() {
  return (
    <SectionPlaceholder
      title="SOP & Policies"
      description="Search corporate policies, SOPs, guidelines, and business procedures. Results will appear here once the gateway search contract is connected."
    />
  );
}
