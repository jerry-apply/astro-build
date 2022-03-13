import React from 'react';

export const defaultValue = {
  language: 'en-US',
  setLanguage: () => {}
};

export const LanguageContext = React.createContext(defaultValue);
