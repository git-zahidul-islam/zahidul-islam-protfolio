import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { ClientHandling } from "@/components/ClientHandling";
import { Projects } from "@/components/Projects";
import { NowBuilding } from "@/components/NowBuilding";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <ClientHandling />
        <Projects />
        <NowBuilding />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
