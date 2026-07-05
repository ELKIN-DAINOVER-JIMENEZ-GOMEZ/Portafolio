import { createContext, useState, useEffect, type PropsWithChildren } from "react";
import es from "./translations/es.json";
import en from "./translations/en.json";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { es, en };

export function LanguageProvider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>(() => {
    // Obtener idioma del localStorage o usar el del navegador
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "es" || saved === "en")) {
      return saved;
    }
    const browserLang = navigator.language.startsWith("es") ? "es" : "en";
    return browserLang;
  });

  // Guardar en localStorage cuando cambia el idioma
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Función para acceder a traducciones anidadas usando notación de punto
  const t = (key: string): any => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
