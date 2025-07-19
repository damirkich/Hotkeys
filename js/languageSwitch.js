// Translations object
const translations = {
    en: {
        welcome: "Welcome to Hotkeys Guide! Have you ever wondered how to do an action on a PC quickly? Well, then this website is for you!",
        choose_os: "Choose your operating system",
        windows: "Windows",
        macos: "MacOS",
        back_to_main: "Back to main"
    },
    ru: {
        welcome: "Добро пожаловать в учебник горячих клавиш! Вы когда-нибудь задумывались, как быстро выполнить действие на компьютере? Тогда этот сайт для вас!",
        choose_os: "Выберите вашу операционную систему",
        windows: "Windows",
        macos: "MacOS",
        back_to_main: "На главную"
    },
    uk: {
        welcome: "Ласкаво просимо до посібника з гарячих клавіш! Ви коли-небудь замислювалися, як швидко виконати дію на комп'ютері? Тоді цей сайт для вас!",
        choose_os: "Виберіть вашу операційну систему",
        windows: "Windows",
        macos: "MacOS",
        back_to_main: "На головну"
    }
};

// Function to set language
function setLanguage(lang) {
    // Save to localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        } else {
            // Fallback to English if translation missing
            element.textContent = translations['en'][key];
        }
    });
    
    // Update dropdown selection
    document.getElementById('language-switcher').value = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    // Get saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    
    // Set initial language
    setLanguage(savedLang);
    
    // Add event listener for language switcher
    document.getElementById('language-switcher').addEventListener('change', function(e) {
        setLanguage(e.target.value);
    });
});