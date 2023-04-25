import { Language, Languages, LanguageKeys } from '../languages/languages';

export function filterSpokenLanguages(languages: Languages): Language[] {
    const filteredLanguages: Language[] = [];

    for (const language in languages) {
        const key = language as LanguageKeys;
        if (languages[key].isSpoken) {
            filteredLanguages.push(languages[key]);
        }
    }
    return filteredLanguages;
}