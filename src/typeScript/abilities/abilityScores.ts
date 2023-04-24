export enum AbilityScoreType {
    strength = "strength",
    dexterity = "dexterity",
    constitution = "constitution",
    intelligence = "intelligence",
    wisdom = "wisdom",
    charisma = "charisma",
}

export interface AbilityScore {
    name: string;
    displayName: string;
    value: number;
}

export interface AbilityScoreValues {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
}

export type AbilityScores = Record<AbilityScoreType, AbilityScore>;

export type AbilityScoreKeys = keyof typeof AbilityScoreType;