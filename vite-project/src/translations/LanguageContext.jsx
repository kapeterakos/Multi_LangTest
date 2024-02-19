import React, { createContext, useState, useContext } from 'react';
import textsEn from './textEn.json';
import textsEs from './textEs.json';
import textsFr from './textFr.json';

const texts = {
    en: textsEn,
    es: textsEs,
    fr: textsFr
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, texts: texts[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
