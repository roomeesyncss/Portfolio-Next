import { ScrollToTop } from "@/components/helpers";
import { About, Contact, Hero, Projects, Skills } from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
