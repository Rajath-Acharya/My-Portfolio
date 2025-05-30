import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"; // Optional

function App() {
  useEffect(() => {
    if (window && (window as any).dataLayer) {
      (window as any).dataLayer.push({ event: "page_view" });
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop /> {/* Optional */}
    </div>
  );
}

export default App;
