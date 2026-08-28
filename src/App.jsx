import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AIChatWidget from "./components/AIChatWidget";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function PortfolioApp() {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <AIChatWidget />
    </div>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    const syncPath = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", syncPath);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", syncPath);
    };
  }, []);

  const isUnknownRoute = currentPath !== "/" && currentPath !== "";

  return (
    <>
      <LoadingScreen show={loading} />
      <CustomCursor />
      {isUnknownRoute ? <NotFound /> : <PortfolioApp />}
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}