import { HeroSection } from "@/features/landing/components/hero-section";
import { SiteNav } from "@/features/landing/components/site-nav";
import { heroContent, navContent } from "@/features/landing/config/landing-content";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-ink">
      <SiteNav content={navContent} />
      <main className="flex-1">
        <HeroSection content={heroContent} />
      </main>
    </div>
  );
}
