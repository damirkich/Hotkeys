// Translations object
const translations = {
    en: {
        welcome: "Welcome to Hotkeys Guide! Have you ever wondered how to do an action on a PC quickly? Well, then this website is for you!",
        choose_os: "Choose your operating system",
        windows: "Windows",
        macos: "MacOS",
        back_to_main: "Back to main",
        windowsTitle: "Windows Hotkeys",
        chkCopy: "Ctrl + C: Copy",
        chkPaste: "Ctrl + V: Paste",
        chkCut: "Ctrl + X: Cut",
        chkSa: "Ctrl + A: Select all",
        chkTitle: "Ctrl Hotkeys",
        chkUndo: "Ctrl + Z: Undo",
        chkRedo: "Ctrl + Y: Redo",
        chkFind: "Ctrl + F: Find",
        chkSave: "Ctrl + S: Save",
        chkPrint: "Ctrl + P: Print",
        chkNw: "Ctrl + N: New window",
        chkTab: "Ctrl + Tab: Switch between tabs in a browser",
        chkBook: "Ctrl + D: Add current page to bookmarks in a browser",
        chkTask: "Ctrl + Shift + Esc: Open Task Manager",
        chkUUndo: "Ctrl + Shift + Z: Cancel Ctrl + Z action",
        chkRTab: "Ctrl + Shift + T: Reopen last closed tab in a browser",
        chkAt: "Alt + Tab: Switch between open windows",
        chkAf: "Alt + F4: Close the current window",
        chkAs: "Alt + Space: Open window's control menu",
        chtkAd: "Alt + D: Focus on the search bar in a browser",
        chkATitle: "Alt Hotkeys",
    },
    ru: {
        welcome: "Добро пожаловать в учебник горячих клавиш! Вы когда-нибудь задумывались, как быстро выполнить действие на компьютере? Тогда этот сайт для вас!",
        choose_os: "Выберите вашу операционную систему",
        windows: "Windows",
        macos: "MacOS",
        back_to_main: "На главную",
        windowsTitle: "Горячие клавиши Windows",
        chkCopy: "Ctrl + C: Копировать",
        chkPaste: "Ctrl + V: Вставить",
        chkCut: "Ctrl + X: Вырезать",
        chkSa: "Ctrl + A: Выделить всё",
        chkTitle: "Клавиши Ctrl ",
        chkUndo: "Ctrl + Z: Отменить",
        chkRedo: "Ctrl + Y: Повторить",
        chkFind: "Ctrl + F: Поиск",
        chkSave: "Ctrl + S: Сохранить",
        chkPrint: "Ctrl + P: Печать",
        chkNw: "Ctrl + N: Новое окно",
        chkTab: "Ctrl + Tab: Переключение между вкладками в браузере",
        chkBook: "Ctrl + D: Добавить текущую страницу в закладки в браузере",
        chkTask: "Ctrl + Shift + Esc: Открыть диспетчер задач",
        chkUUndo: "Ctrl + Shift + Z: Отменить действие Ctrl + Z",
        chkRTab: "Ctrl + Shift + T: Повторно открыть последнюю закрытую вкладку в браузере",
        chkAt: "Alt + Tab: Переключение между открытыми окнами",
        chkAf: "Alt + F4: Закрыть текущее окно",
        chkAs: "Alt + Space: Открыть меню управления окном",
        chtkAd: "Alt + D: Перейти к строке поиска в браузере",
        chkATitle: "Горячие клавиши Alt",
    },
    uk: {
        welcome: "Ласкаво просимо до посібника з гарячих клавіш! Ви коли-небудь замислювалися, як швидко виконати дію на комп'ютері? Тоді цей сайт для вас!",
        choose_os: "Виберіть вашу операційну систему",
        windows: "Windows",
        macos: "MacOS",
        back_to_main: "На головну",
        windowsTitle: "Гарячі клавіші Windows",
        chkCopy: "Ctrl + C: Копіювати",
        chkPaste: "Ctrl + V: Вставити",
        chkCut: "Ctrl + X: Вирізати",
        chkSa: "Ctrl + A: Виділити все",
        chkTitle: "Клавіші Ctrl ",
        chkUndo: "Ctrl + Z: Відмінити",
        chkRedo: "Ctrl + Y: Повторити",
        chkFind: "Ctrl + F: Пошук",
        chkSave: "Ctrl + S: Зберегти",
        chkPrint: "Ctrl + P: Друк",
        chkNw: "Ctrl + N: Нове вікно",
        chkTab: "Ctrl + Tab: Перемикання між вкладками в браузері",
        chkBook: "Ctrl + D: Додати поточну сторінку до закладок",
        chkTask: "Ctrl + Shift + Esc: Відкрити диспетчер завдань",
        chkUUndo: "Ctrl + Shift + Z: Скасувати дію Ctrl + Z",
        chkRTab: "Ctrl + Shift + T: Відкрити останню закриту вкладку в браузері",
        chkAt: "Alt + Tab: Перемикання між відкритими вікнами",
        chkAf: "Alt + F4: Закрити поточне вікно",
        chkAs: "Alt + Space: Відкрити меню керування вікном",
        chtkAd: "Alt + D: Перейти до рядка пошуку в браузері",
        chkATitle: "Гарячі клавіші Alt",

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