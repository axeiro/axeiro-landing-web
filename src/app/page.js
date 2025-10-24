import ScrollAndAnimProvider from "@/components/ScrollAndAnimProvider";
import Hero from "@/components/Hero";
import Who from "@/components/Who";
import Services from "@/components/Services";
import Security from "@/components/Security";
import Integrations from "@/components/Integrations";
import DashboardPreview from "@/components/DashboardPreview";
import Reviews from "@/components/Reviews";
import FutureGoals from "@/components/FutureGoals";
import PricingCTA from "@/components/PricingCTA";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
import Pricing from "@/components/Pricing";

export default function Page() {
  return (
    <>
      <NavbarWrapper />
      <main className="pt-10 lg:pt-1">
        <ScrollAndAnimProvider>
          <Hero />
          <Who />
          <Services />
          <Security />
          <Integrations />
          <Pricing />
          <DashboardPreview />
          <Reviews />
          <FutureGoals />
          <PricingCTA />
        </ScrollAndAnimProvider>
      </main>
      <Footer />
    </>
  );
}
