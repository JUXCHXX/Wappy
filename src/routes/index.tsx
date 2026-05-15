import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/wappy/Nav";
import { Hero } from "@/components/wappy/Hero";
import { Metrics } from "@/components/wappy/Metrics";
import { HowItWorks } from "@/components/wappy/HowItWorks";
import { Features } from "@/components/wappy/Features";
import { Pricing } from "@/components/wappy/Pricing";
import { Testimonials } from "@/components/wappy/Testimonials";
import { Referrals } from "@/components/wappy/Referrals";
import { FinalCTA } from "@/components/wappy/FinalCTA";
import { Footer } from "@/components/wappy/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Metrics />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonials />
      <Referrals />
      <FinalCTA />
      <Footer />
    </main>
  );
}
