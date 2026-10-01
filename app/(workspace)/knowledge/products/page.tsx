import type { Metadata } from "next";

import { SectionPlaceholder } from "@/features/app-shell/components/section-placeholder";

export const metadata: Metadata = {
  title: "Product Knowledge",
};

export default function ProductKnowledgePage() {
  return (
    <SectionPlaceholder
      title="Product Knowledge"
      description="Search product information, specifications, technical documents, and related product knowledge. Results will appear here once the gateway search contract is connected."
    />
  );
}
