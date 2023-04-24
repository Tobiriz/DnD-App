import { AbilityScoreKeys } from "../abilities/abilityScores";

export enum SkillType {
    acrobatics = "acrobatics",
    animalHandling = "animalHandling",
    arcana = "arcana",
    athletics = "athletics",
    deception = "deception",
    history = "history",
    insight = "insight",
    intimidation = "intimidation",
    investigation = "investigation",
    medicine = "medicine",
    nature = "nature",
    perception = "perception",
    performance = "performance",
    persuasion = "persuasion",
    religion = "religion",
    sleightOfHand = "sleightOfHand",
    stealth = "stealth",
    survival = "survival"
}

export interface Skill {
    name: string;
    displayName: string;
    ability: AbilityScoreKeys;
    abilityDisplayName: string;
    proficient: boolean;
}

export type SkillProficiencies = Record<SkillType, boolean>;

export type Skills = Record<SkillType, Skill>;

export type SkillKeys = keyof typeof SkillType;