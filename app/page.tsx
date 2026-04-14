import ChooseUsSection from "./components/ChooseUsSection";

export default function Home() {
  return (
    <main>
      <ChooseUsSection />
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* Additional sections can be added here */}
    </main>
  );
}