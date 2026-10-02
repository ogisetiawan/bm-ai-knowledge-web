import type { ConversationSession } from "@/features/conversation/lib/group-sessions";

/** Display stand-in until the gateway exposes a conversation list. */
export function sampleSessions(now = new Date()): ConversationSession[] {
  function at(daysAgo: number, hour: number) {
    const date = new Date(now);
    date.setDate(date.getDate() - daysAgo);
    date.setHours(hour, 0, 0, 0);
    return date.toISOString();
  }

  return [
    {
      id: "sample-flash-point",
      title: "Flash point and handling for Sodium Benzoate",
      updatedAt: at(0, 10),
    },
    {
      id: "sample-onboarding-sop",
      title: "SOP for onboarding a new branch employee",
      updatedAt: at(0, 8),
    },
    {
      id: "sample-product-compare",
      title: "Compare two product specifications",
      updatedAt: at(2, 15),
    },
    {
      id: "sample-storage",
      title: "Storage requirements in the SDS",
      updatedAt: at(5, 11),
    },
    {
      id: "sample-policy",
      title: "Which document covers this policy?",
      updatedAt: at(12, 9),
    },
    {
      id: "sample-export",
      title: "Regulatory notes for an export document",
      updatedAt: at(21, 16),
    },
  ];
}
