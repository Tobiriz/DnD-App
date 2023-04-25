import { SkillType, SkillProficiencies, Skills } from "./skills";
import { AbilityScoreType } from "../abilities/abilityScores";

export function initializeSkills(skillProficiencies: SkillProficiencies): Skills {
    const initializedSkills: Skills = {
        acrobatics: {
            name: SkillType.acrobatics,
            displayName: "",
            ability: AbilityScoreType.dexterity,
            abilityDisplayName: "",
            proficient: skillProficiencies.acrobatics,
        },
        animalHandling: {
            name: SkillType.animalHandling,
            displayName: "",
            ability: AbilityScoreType.wisdom,
            abilityDisplayName: "",
            proficient: skillProficiencies.animalHandling,
        },
        arcana: {
            name: SkillType.arcana,
            displayName: "",
            ability: AbilityScoreType.intelligence,
            abilityDisplayName: "",
            proficient: skillProficiencies.arcana,
        },
        athletics: {
            name: SkillType.athletics,
            displayName: "",
            ability: AbilityScoreType.strength,
            abilityDisplayName: "",
            proficient: skillProficiencies.athletics,
        },
        deception: {
            name: SkillType.deception,
            displayName: "",
            ability: AbilityScoreType.charisma,
            abilityDisplayName: "",
            proficient: skillProficiencies.deception,
        },
        history: {
            name: SkillType.history,
            displayName: "",
            ability: AbilityScoreType.intelligence,
            abilityDisplayName: "",
            proficient: skillProficiencies.history,
        },
        insight: {
            name: SkillType.insight,
            displayName: "",
            ability: AbilityScoreType.wisdom,
            abilityDisplayName: "",
            proficient: skillProficiencies.insight,
        },
        intimidation: {
            name: SkillType.intimidation,
            displayName: "",
            ability: AbilityScoreType.charisma,
            abilityDisplayName: "",
            proficient: skillProficiencies.intimidation,
        },
        investigation: {
            name: SkillType.investigation,
            displayName: "",
            ability: AbilityScoreType.intelligence,
            abilityDisplayName: "",
            proficient: skillProficiencies.investigation,
        },
        medicine: {
            name: SkillType.medicine,
            displayName: "",
            ability: AbilityScoreType.wisdom,
            abilityDisplayName: "",
            proficient: skillProficiencies.medicine,
        },
        nature: {
            name: SkillType.nature,
            displayName: "",
            ability: AbilityScoreType.intelligence,
            abilityDisplayName: "",
            proficient: skillProficiencies.nature,
        },
        perception: {
            name: SkillType.perception,
            displayName: "",
            ability: AbilityScoreType.wisdom,
            abilityDisplayName: "",
            proficient: skillProficiencies.perception,
        },
        performance: {
            name: SkillType.performance,
            displayName: "",
            ability: AbilityScoreType.charisma,
            abilityDisplayName: "",
            proficient: skillProficiencies.performance,
        },
        persuasion: {
            name: SkillType.persuasion,
            displayName: "",
            ability: AbilityScoreType.charisma,
            abilityDisplayName: "",
            proficient: skillProficiencies.persuasion,
        },
        religion: {
            name: SkillType.religion,
            displayName: "",
            ability: AbilityScoreType.intelligence,
            abilityDisplayName: "",
            proficient: skillProficiencies.religion,
        },
        sleightOfHand: {
            name: SkillType.sleightOfHand,
            displayName: "",
            ability: AbilityScoreType.dexterity,
            abilityDisplayName: "",
            proficient: skillProficiencies.sleightOfHand,
        },
        stealth: {
            name: SkillType.stealth,
            displayName: "",
            ability: AbilityScoreType.dexterity,
            abilityDisplayName: "",
            proficient: skillProficiencies.stealth,
        },
        survival: {
            name: SkillType.survival,
            displayName: "",
            ability: AbilityScoreType.wisdom,
            abilityDisplayName: "",
            proficient: skillProficiencies.survival,
        },
    };

    return initializedSkills;
}