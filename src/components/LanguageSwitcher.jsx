import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={() => changeLanguage('en')} className="px-2 py-1 bg-gray-200 rounded">EN</button>
      <button onClick={() => changeLanguage('gu')} className="px-2 py-1 bg-gray-200 rounded">GU</button>
    </div>
  );
};

export default LanguageSwitcher;
