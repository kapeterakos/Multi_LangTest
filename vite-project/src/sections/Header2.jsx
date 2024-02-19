import React from 'react';
import { useLanguage } from '../translations/LanguageContext';

function Header2() {
    const { texts } = useLanguage();

    return (
        <h2 className="read-the-docs">
            {texts.learnMore}
        </h2>
    );
}

export default Header2;
