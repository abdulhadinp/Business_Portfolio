import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/layout/FloatingCTA";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Zyvora from "@/components/sections/Zyvora";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import CodeByHadi from "@/components/sections/CodeByHadi";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Zyvora />
        <Skills />
        <Testimonials />
        <CodeByHadi />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
