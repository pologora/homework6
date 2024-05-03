const translations = {
  en: {
    greet: 'Hello',
    intro: 'Welcome to our website',
  },
  fr: {
    greet: 'Bonjour',
    intro: 'Bienvenue sur notre site web',
  },
};

const language = 'en'; // Change to "en" for English

function localize(strings, key) {
  const translation = translations[language];

  return translation[key];
}

module.exports = localize;
