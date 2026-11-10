import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import DeveloperTerminal from "./components/DeveloperTerminal";
import MiniGames from "./components/MiniGames";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AIAssistant from "./components/AIAssistant";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

function PortfolioApp() {
  return (
    <div className="relative min-h-screen bg-cyber-dark text-slate-100 transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DeveloperTerminal />
        <MiniGames />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <AIAssistant />
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
    }, 1100);

    const syncPath = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", syncPath);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("popstate", syncPath);
    };
  }, []);

  const isUnknownRoute = currentPath !== "/" && currentPath !== "" && !currentPath.startsWith("/#");

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
