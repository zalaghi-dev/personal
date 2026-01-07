import { ThemeProvider } from "@/components/main/theme-provider";
import { Header } from "@/components/main/header";
import { useEffect } from "react";
import { useLanguageStore } from "@/store/language-store";
import { useTranslation } from "react-i18next";
import { languages } from "./locales";

const AllWrapper = () => {
  const { lang } = useLanguageStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.documentElement.dir = languages[lang].dir;
  }, [lang, i18n]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="personal">
      <Header />
      <main className="container mx-auto p-4">
        <div></div>
      </main>
    </ThemeProvider>
  );
};

export default AllWrapper;
