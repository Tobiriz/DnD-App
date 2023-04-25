import { LanguageType, Languages, SpokenLanguages, languageToScriptMap } from "./languages";

export function initializeLanguages(spokenLanguages: SpokenLanguages): Languages {
    const initializedLanguages: Languages = {
        [LanguageType.common]: {
            name: LanguageType.common,
            displayName: '',
            script: { 
                name: languageToScriptMap[LanguageType.common],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.common],
        },
        [LanguageType.dwarvish]: {
            name: LanguageType.dwarvish,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.dwarvish],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.dwarvish],
        },
        [LanguageType.elvish]: {
            name: LanguageType.elvish,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.elvish],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.elvish],
        },
        [LanguageType.giant]: {
            name: LanguageType.giant,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.giant],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.giant],
        },
        [LanguageType.gnomish]: {
            name: LanguageType.gnomish,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.gnomish],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.gnomish],
        },
        [LanguageType.goblin]: {
            name: LanguageType.goblin,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.goblin],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.goblin],
        },
        [LanguageType.halfling]: {
            name: LanguageType.halfling,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.halfling],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.halfling],
        },
        [LanguageType.orc]: {
            name: LanguageType.orc,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.orc],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.orc],
        },
        [LanguageType.abyssal]: {
            name: LanguageType.abyssal,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.abyssal],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.abyssal],
        },
        [LanguageType.celestial]: {
            name: LanguageType.celestial,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.celestial],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.celestial],
        },
        [LanguageType.draconic]: {
            name: LanguageType.draconic,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.draconic],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.draconic],
        },
        [LanguageType.deepSpeech]: {
            name: LanguageType.deepSpeech,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.deepSpeech],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.deepSpeech],
        },
        [LanguageType.infernal]: {
            name: LanguageType.infernal,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.infernal],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.infernal],
        },
        [LanguageType.primordial]: {
            name: LanguageType.primordial,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.primordial],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.primordial],
        },
        [LanguageType.sylvan]: {
            name: LanguageType.sylvan,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.sylvan],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.sylvan],
        },
        [LanguageType.undercommon]: {
            name: LanguageType.undercommon,
            displayName: '',
            script: {
                name: languageToScriptMap[LanguageType.undercommon],
                displayName: '',
            },
            isSpoken: spokenLanguages[LanguageType.undercommon],
        },
    };

    return initializedLanguages;
};