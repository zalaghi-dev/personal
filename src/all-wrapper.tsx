import { ThemeProvider } from "@/components/main/theme-provider";
import { Header } from "@/components/main/header";
import { Hero } from "@/components/main/hero";
import { useEffect } from "react";
import { useLanguageStore } from "@/store/language-store";
import { useTranslation } from "react-i18next";
import { languages } from "./locales";
import { Services } from "./components/main/services";
import { TechStack } from "./components/main/tech-stack";
import { About } from "./components/main/about";
import { Experiences } from "./components/main/experiences";
import { Skills } from "./components/main/skills";
import { Footer } from "./components/main/footer";

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
      <Hero />
      <TechStack />
      <Services />
      <About />
      <Experiences />
      <Skills />
      <Footer />
    </ThemeProvider>
  );
};

export default AllWrapper;
