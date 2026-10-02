export type ConversationSession = {
  id: string;
  title: string;
  updatedAt: string;
};

export type ConversationGroupId = "today" | "seven-days" | "previous";

export type ConversationGroup = {
  id: ConversationGroupId;
  label: string;
  sessions: ConversationSession[];
};

const groupLabels: Record<ConversationGroupId, string> = {
  today: "Today",
  "seven-days": "7 days",
  previous: "Previous chat",
};

export function groupSessions(
  sessions: ConversationSession[],
  now = new Date(),
): ConversationGroup[] {
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const sevenDaysAgo = new Date(startOfToday);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const buckets: Record<ConversationGroupId, ConversationSession[]> = {
    today: [],
    "seven-days": [],
    previous: [],
  };

  const ordered = [...sessions].sort(
    (left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime(),
  );

  for (const session of ordered) {
    const updatedAt = new Date(session.updatedAt);
    if (updatedAt >= startOfToday) buckets.today.push(session);
    else if (updatedAt >= sevenDaysAgo) buckets["seven-days"].push(session);
    else buckets.previous.push(session);
  }

  return (Object.keys(groupLabels) as ConversationGroupId[])
    .filter((id) => buckets[id].length > 0)
    .map((id) => ({ id, label: groupLabels[id], sessions: buckets[id] }));
}
