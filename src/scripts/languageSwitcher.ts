import { setLanguage } from "../utils/i18n";

export function initializeLanguageSwitcher() {
    const langButtons = document.querySelectorAll<HTMLButtonElement>(".lang-btn");

    langButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const lang = button.dataset.lang;
            if (lang === 'es' || lang === 'en') {
                setLanguage(lang);
            }
        });
    });
}
