import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FadeInSection from "@/components/FadeInSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </>
  );
}
