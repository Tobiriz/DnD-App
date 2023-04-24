import { SkillProficiencies } from "../../interfaces/configuration/skillProficiencies.interface.configuration";
import { Skills } from "../../interfaces/skills.interface";

export function initializeSkills(skillProficiencies: SkillProficiencies): Skills {
    const initializedSkills: Skills = {
        acrobatics: {
            name: "acrobatics",
            displayName: "",
            ability: "dexterity",
            abilityDisplayName: "",
            proficient: skillProficiencies.acrobatics,
        },
        animalHandling: {
            name: "animalHandling",
            displayName: "",
            ability: "wisdom",
            abilityDisplayName: "",
            proficient: skillProficiencies.animalHandling,
        },
        arcana: {
            name: "arcana",
            displayName: "",
            ability: "intelligence",
            abilityDisplayName: "",
            proficient: skillProficiencies.arcana,
        },
        athletics: {
            name: "athletics",
            displayName: "",
            ability: "strength",
            abilityDisplayName: "",
            proficient: skillProficiencies.athletics,
        },
        deception: {
            name: "deception",
            displayName: "",
            ability: "charisma",
            abilityDisplayName: "",
            proficient: skillProficiencies.deception,
        },
        history: {
            name: "history",
            displayName: "",
            ability: "intelligence",
            abilityDisplayName: "",
            proficient: skillProficiencies.history,
        },
        insight: {
            name: "insight",
            displayName: "",
            ability: "wisdom",
            abilityDisplayName: "",
            proficient: skillProficiencies.insight,
        },
        intimidation: {
            name: "intimidation",
            displayName: "",
            ability: "charisma",
            abilityDisplayName: "",
            proficient: skillProficiencies.intimidation,
        },
        investigation: {
            name: "investigation",
            displayName: "",
            ability: "intelligence",
            abilityDisplayName: "",
            proficient: skillProficiencies.investigation,
        },
        medicine: {
            name: "medicine",
            displayName: "",
            ability: "wisdom",
            abilityDisplayName: "",
            proficient: skillProficiencies.medicine,
        },
        nature: {
            name: "nature",
            displayName: "",
            ability: "intelligence",
            abilityDisplayName: "",
            proficient: skillProficiencies.nature,
        },
        perception: {
            name: "perception",
            displayName: "",
            ability: "wisdom",
            abilityDisplayName: "",
            proficient: skillProficiencies.perception,
        },
        performance: {
            name: "performance",
            displayName: "",
            ability: "charisma",
            abilityDisplayName: "",
            proficient: skillProficiencies.performance,
        },
        persuasion: {
            name: "persuasion",
            displayName: "",
            ability: "charisma",
            abilityDisplayName: "",
            proficient: skillProficiencies.persuasion,
        },
        religion: {
            name: "religion",
            displayName: "",
            ability: "intelligence",
            abilityDisplayName: "",
            proficient: skillProficiencies.religion,
        },
        sleightOfHand: {
            name: "sleightOfHand",
            displayName: "",
            ability: "dexterity",
            abilityDisplayName: "",
            proficient: skillProficiencies.sleightOfHand,
        },
        stealth: {
            name: "stealth",
            displayName: "",
            ability: "dexterity",
            abilityDisplayName: "",
            proficient: skillProficiencies.stealth,
        },
        survival: {
            name: "survival",
            displayName: "",
            ability: "wisdom",
            abilityDisplayName: "",
            proficient: skillProficiencies.survival,
        },
    };

    return initializedSkills;
}