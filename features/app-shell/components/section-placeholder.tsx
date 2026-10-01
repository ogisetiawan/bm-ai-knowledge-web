type SectionPlaceholderProps = {
  title: string;
  description: string;
};

export function SectionPlaceholder({ title, description }: SectionPlaceholderProps) {
  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-10">
      <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      <p className="mt-2 max-w-md text-sm leading-5 text-muted-foreground">{description}</p>
    </div>
  );
}
