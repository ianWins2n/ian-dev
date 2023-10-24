import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loader from "./components/Loader";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8">
      <Hero />
      <About />
    </main>
  );
}
