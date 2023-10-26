import About from "./components/About";
import Hero from "./components/Hero";
import Experience from "./components/Experience";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
