import AboutUs from "@/components/AboutUs";
import ChooseUsSection from "../components/ChooseUsSection";
import Hero from "@/components/Hero";
import ServicesSection from "../components/ServicesSection";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <AboutUs />
      <ServicesSection />
      <ChooseUsSection />
      <ContactFooter />
    </main>
  );
}