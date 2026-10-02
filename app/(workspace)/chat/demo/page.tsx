import type { Metadata } from "next";

import ChatDemoPage from "../page-demo";

export const metadata: Metadata = {
  title: "AI Chat",
};

export default function ChatDemoRoute() {
  return <ChatDemoPage />;
}
