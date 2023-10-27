import About from "./components/About";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Hero />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
