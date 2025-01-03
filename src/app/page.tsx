import { CallToActionSection } from "@/components/call-to-action";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { SecondaryIssuesSection } from "@/components/secondary-issues-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <SecondaryIssuesSection />
      <CallToActionSection />
    </main>
  );
}
