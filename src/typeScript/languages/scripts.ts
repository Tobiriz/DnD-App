export enum ScriptType {
    common = 'common',
    dwarvish = 'dwarvish',
    elvish = 'elvish',
    infernal = 'infernal',
    celestial = 'celestial',
    draconic = 'draconic',
    none = 'none',
}

export interface Script {
    name: string;
    displayName: string;
}

export type Scripts = Record<ScriptType, Script>;

export type ScriptKeys = keyof typeof ScriptType;
