export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type NavContent = {
  brand: string;
  links: NavLink[];
  cta: CallToAction;
  menuOpenLabel: string;
  menuCloseLabel: string;
};

export type FloatingIcon = {
  src: string;
  size: number;
  className: string;
  delay: string;
};

export type HeroContent = {
  brandLine: string;
  titleLines: string[];
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  promptPlaceholder: string;
  promptLabel: string;
  promptExamples: string[];
  useExampleHint: string;
  floatingIcons: FloatingIcon[];
};

export const navContent: NavContent = {
  brand: "QwenWork",
  links: [
    { label: "Home", href: "/", active: true },
    { label: "Features", href: "#features" },
    { label: "Use Case", href: "#usecase" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Get Started", href: "#try" },
  menuOpenLabel: "Open menu",
  menuCloseLabel: "Close menu",
};

export const heroContent: HeroContent = {
  brandLine: "BMKnowledge,",
  titleLines: ["Ask.", "Find.", "Understand."],
  primaryCta: { label: "Start Chatting", href: "/chat" },
  secondaryCta: { label: "Learn More", href: "/docs" },
  promptLabel: "Ask a question about your company knowledge",
  promptPlaceholder: "Ask anything about your documents",
  promptExamples: [
    "What is the flash point, density, and viscosity of Emosmart",
    "Find the SOP for onboarding a new branch employee",
    "Which document covers this policy?",
    "Summarize this technical specification?",
  ],
  useExampleHint: "to use this example",
  floatingIcons: [
    {
      src: "/icons/documents/doc-icon.svg",
      size: 64,
      delay: "0s",
      className:
        "top-[20%] left-1 size-8 -rotate-6 sm:left-3 sm:size-10 md:top-[15%] md:left-[2%] md:size-12 lg:left-[5%] lg:size-14 xl:top-[14%] xl:left-[15%] xl:size-16",
    },
    {
      src: "/icons/documents/txt.svg",
      size: 128,
      delay: "1.2s",
      className:
        "top-[34%] left-0 hidden size-14 -rotate-12 md:block lg:top-[32%] lg:left-[3%] lg:size-20 xl:top-[36%] xl:left-[11%] xl:size-32",
    },
    {
      src: "/icons/documents/pdf-icon.svg",
      size: 96,
      delay: "0.6s",
      className:
        "bottom-[7%] left-1 size-9 -rotate-12 sm:bottom-[10%] sm:size-11 md:bottom-[12%] md:left-[2%] md:size-14 lg:left-[4%] lg:size-16 xl:bottom-[14%] xl:left-[9%] xl:size-24",
    },
    {
      src: "/icons/documents/spreedsheet.svg",
      size: 132,
      delay: "1.8s",
      className:
        "top-[16%] right-1 size-10 rotate-12 sm:right-3 sm:size-12 md:top-[12%] md:right-[2%] md:size-16 lg:right-[4%] lg:size-20 xl:top-[10%] xl:right-[9%] xl:size-32",
    },
    {
      src: "/icons/documents/xls.svg",
      size: 84,
      delay: "0.3s",
      className:
        "top-[36%] right-0 hidden size-12 rotate-6 md:block lg:top-[34%] lg:right-[3%] lg:size-16 xl:top-[40%] xl:right-[13%] xl:size-20",
    },
    {
      src: "/icons/documents/img-icon.svg",
      size: 40,
      delay: "0.9s",
      className:
        "top-[24%] right-14 hidden size-6 rotate-12 sm:block sm:size-7 md:top-[26%] md:right-[10%] md:size-8 lg:right-[12%] xl:top-[38%] xl:right-[10%] xl:size-10",
    },
    {
      src: "/icons/documents/pdf.svg",
      size: 52,
      delay: "1.5s",
      className:
        "right-2 bottom-[8%] size-8 rotate-[18deg] sm:bottom-[12%] sm:size-9 md:right-[4%] md:bottom-[14%] md:size-10 lg:right-[8%] lg:size-11 xl:right-[19%] xl:bottom-[18%] xl:size-[3.25rem]",
    },
  ],
};
