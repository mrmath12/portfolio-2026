import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';
import { translations } from '@/data/translations';

export function useTranslation() {
  const { lang } = useContext(LanguageContext);
  return { t: translations[lang], lang };
}
