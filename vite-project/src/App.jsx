// App.js
import React from 'react';
import './App.css';
import { useLanguage, LanguageProvider } from './translations/LanguageContext';
import Header1 from './sections/Header1';
import Header2 from './sections/Header2';

function App() {
  const { changeLanguage } = useLanguage();

  return (
    <>
      <Header1 />
      <Header2 />
      <div>
        <button onClick={() => changeLanguage('en')}>
          English
        </button>
        <button onClick={() => changeLanguage('es')}>
          Spanish
        </button>
        <button onClick={() => changeLanguage('fr')}>
          French
        </button>
      </div>
    </>
  );
}

function AppWithLanguageProvider() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

export default AppWithLanguageProvider;
