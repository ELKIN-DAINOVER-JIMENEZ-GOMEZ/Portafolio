import { useEffect, useState } from "react";
import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
   const [isDark, setIsDark] = useState(true);

  // Sincronizar clase en <html> para que Tailwind dark: funcione
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <LanguageProvider>
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <Hero isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <About isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </LanguageProvider>
  );
}
export default App
