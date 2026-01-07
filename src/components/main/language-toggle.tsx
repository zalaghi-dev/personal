import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useLanguageStore } from '@/store/language-store';
import { languages } from '../../locales';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const { lang, setLanguage } = useLanguageStore();

  const handleLanguageChange = (newLang: 'en' | 'fa') => {
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.dir = languages[newLang].dir;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <span className="text-sm font-medium">{lang.toUpperCase()}</span>
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([key, { name }]) => (
          <DropdownMenuItem
            key={key}
            onClick={() => handleLanguageChange(key as 'en' | 'fa')}
          >
            {name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
