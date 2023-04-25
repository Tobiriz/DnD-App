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

export type AbilityScoreValues = Record<AbilityScoreType, number>;

export type AbilityScores = Record<AbilityScoreType, AbilityScore>;

export type AbilityScoreKeys = keyof typeof AbilityScoreType;

export type AbilityScoreBonuses = Record<AbilityScoreType, number>;