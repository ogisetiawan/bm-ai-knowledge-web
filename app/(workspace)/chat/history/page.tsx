export default function ChatHistoryPage() {
  return (
    <div className="flex flex-1 flex-col items-start justify-center px-6 py-10">
      <h1 className="text-lg font-semibold text-foreground">Conversation History</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        History will list and open previous conversations when the gateway API is wired.
      </p>
    </div>
  );
}
