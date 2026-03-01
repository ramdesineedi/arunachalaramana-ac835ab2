import React, { createContext, useState, ReactNode } from "react";

export type Language = "en" | "te";

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  // keep the `lang` attribute on <html> in sync and add a helper class when
  // Telugu is active so that our global CSS can apply the appropriate font.
  React.useEffect(() => {
    document.documentElement.lang = language;
    if (language === "te") {
      document.documentElement.classList.add("telugu");
    } else {
      document.documentElement.classList.remove("telugu");
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
