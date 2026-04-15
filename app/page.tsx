import AboutUs from "@/components/AboutUs";
import ChooseUsSection from "./components/ChooseUsSection";
import Hero from "@/components/Hero";
import ContactFooter from "./components/ContactFooter";
import ServicesSection from "./components/ServicesSection";

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