import Benefit from "@/components/shared/Benefit";
import Features from "@/components/shared/Features";
import Footer from "@/components/shared/Footer";
import GetStarted from "@/components/shared/GetStarted";
import Hero from "@/components/shared/Hero";
import Navbar from "@/components/shared/Navbar";
import Plans from "@/components/shared/Plans";
import Support from "@/components/shared/Support";
import Teams from "@/components/shared/Teams";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />  
      <Hero />
      <Teams />
      <Support />
      <Features />
      <Benefit />
      <Plans />
      <GetStarted />
      <Footer />
    </main>
  );
}
