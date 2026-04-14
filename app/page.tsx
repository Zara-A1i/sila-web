import ChooseUsSection from "./components/ChooseUsSection";
import Hero from "@/components/Hero";
import ContactFooter from "./components/ContactFooter";

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <ChooseUsSection />
      <ContactFooter/>
    </main>
  );
}