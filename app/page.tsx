"use client";
import { useState, useEffect } from 'react';
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Grid from "./components/Grid";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Time from "./components/Time";
import { navItems } from "@/data";
import Preloader from "./components/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this time as needed
  }, []);

  if (isLoading) {
    return <Preloader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <main>
      <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <Time />
          <Clients />
          <Footer />
        </div>
      </div>
    </main>
  );
}
