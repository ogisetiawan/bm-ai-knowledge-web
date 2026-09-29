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
    { src: "/icons/documents/doc-icon.svg", size: 64, className: "left-[15%] top-[14%] -rotate-6", delay: "0s" },
    { src: "/icons/documents/txt.svg", size: 128, className: "left-[11%] top-[36%] -rotate-12", delay: "1.2s" },
    { src: "/icons/documents/pdf-icon.svg", size: 96, className: "bottom-[14%] left-[9%] -rotate-12", delay: "0.6s" },
    { src: "/icons/documents/spreedsheet.svg", size: 132, className: "right-[9%] top-[10%] rotate-12", delay: "1.8s" },
    { src: "/icons/documents/xls.svg", size: 84, className: "right-[13%] top-[40%] rotate-6", delay: "0.3s" },
    { src: "/icons/documents/img-icon.svg", size: 40, className: "right-[10%] top-[38%] rotate-12", delay: "0.9s" },
    { src: "/icons/documents/pdf.svg", size: 52, className: "bottom-[18%] right-[19%] rotate-[18deg]", delay: "1.5s" },
  ],
};
