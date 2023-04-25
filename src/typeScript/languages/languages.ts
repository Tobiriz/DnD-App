import { ScriptType, Script } from './scripts';

export enum LanguageType {
    common = 'common',
    dwarvish = 'dwarvish',
    elvish = 'elvish',
    giant = 'giant',
    gnomish = 'gnomish',
    goblin = 'goblin',
    halfling = 'halfling',
    orc = 'orc',
    abyssal = 'abyssal',
    celestial = 'celestial',
    draconic = 'draconic',
    deepSpeech = 'deepSpeech',
    infernal = 'infernal',
    primordial = 'primordial',
    sylvan = 'sylvan',
    undercommon = 'undercommon',
}

export interface Language {
    name: string;
    displayName: string;
    script: Script;
    isSpoken: boolean;
}

export type SpokenLanguages = Record<LanguageType, boolean>;

export type Languages = Record<LanguageType, Language>;

export type LanguageKeys = keyof typeof LanguageType;

export const languageToScriptMap: Record<LanguageType, ScriptType> = {
    [LanguageType.common]: ScriptType.common,
    [LanguageType.dwarvish]: ScriptType.dwarvish,
    [LanguageType.elvish]: ScriptType.elvish,
    [LanguageType.giant]: ScriptType.dwarvish,
    [LanguageType.gnomish]: ScriptType.dwarvish,
    [LanguageType.goblin]: ScriptType.dwarvish,
    [LanguageType.halfling]: ScriptType.common,
    [LanguageType.orc]: ScriptType.dwarvish,
    [LanguageType.abyssal]: ScriptType.infernal,
    [LanguageType.celestial]: ScriptType.celestial,
    [LanguageType.draconic]: ScriptType.draconic,
    [LanguageType.deepSpeech]: ScriptType.none,
    [LanguageType.infernal]: ScriptType.infernal,
    [LanguageType.primordial]: ScriptType.dwarvish,
    [LanguageType.sylvan]: ScriptType.elvish,
    [LanguageType.undercommon]: ScriptType.elvish,
};