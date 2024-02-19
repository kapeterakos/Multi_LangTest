import React from 'react';
import { useLanguage } from '../translations/LanguageContext';

function Header1() {
    const { texts } = useLanguage();

    return (
        <h2 className="edit">
            {texts.edit}
        </h2>
    );
}

export default Header1;
