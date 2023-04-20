import { Skills } from '../../interfaces/skills.interface';

export function loadSkillTranslations(lang: string, skills: Skills): Skills {
    const translation = require(`../../../locales/${lang}.json`);

    const newSkills: Skills = {
        acrobatics: {
            name: skills.acrobatics.name,
            displayName: translation.character.skills.acrobatics,
            ability: skills.acrobatics.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.dex,
            proficient: skills.acrobatics.proficient,
        },
        animalHandling: {
            name: skills.animalHandling.name,
            displayName: translation.character.skills.animalHandling,
            ability: skills.animalHandling.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.wis,
            proficient: skills.animalHandling.proficient,
        },
        arcana: {
            name: skills.arcana.name,
            displayName: translation.character.skills.arcana,
            ability: skills.arcana.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.int,
            proficient: skills.arcana.proficient,
        },
        athletics: {
            name: skills.athletics.name,
            displayName: translation.character.skills.athletics,
            ability: skills.athletics.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.str,
            proficient: skills.athletics.proficient,
        },
        deception: {
            name: skills.deception.name,
            displayName: translation.character.skills.deception,
            ability: skills.deception.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.cha,
            proficient: skills.deception.proficient,
        },
        history: {
            name: skills.history.name,
            displayName: translation.character.skills.history,
            ability: skills.history.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.int,
            proficient: skills.history.proficient,
        },
        insight: {
            name: skills.insight.name,
            displayName: translation.character.skills.insight,
            ability: skills.insight.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.wis,
            proficient: skills.insight.proficient,
        },
        intimidation: {
            name: skills.intimidation.name,
            displayName: translation.character.skills.intimidation,
            ability: skills.intimidation.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.cha,
            proficient: skills.intimidation.proficient,
        },
        investigation: {
            name: skills.investigation.name,
            displayName: translation.character.skills.investigation,
            ability: skills.investigation.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.int,
            proficient: skills.investigation.proficient,
        },
        medicine: {
            name: skills.medicine.name,
            displayName: translation.character.skills.medicine,
            ability: skills.medicine.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.wis,
            proficient: skills.medicine.proficient,
        },
        nature: {
            name: skills.nature.name,
            displayName: translation.character.skills.nature,
            ability: skills.nature.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.int,
            proficient: skills.nature.proficient,
        },
        perception: {
            name: skills.perception.name,
            displayName: translation.character.skills.perception,
            ability: skills.perception.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.wis,
            proficient: skills.perception.proficient,
        },
        performance: {
            name: skills.performance.name,
            displayName: translation.character.skills.performance,
            ability: skills.performance.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.cha,
            proficient: skills.performance.proficient,
        },
        persuasion: {
            name: skills.persuasion.name,
            displayName: translation.character.skills.persuasion,
            ability: skills.persuasion.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.cha,
            proficient: skills.persuasion.proficient,
        },
        religion: {
            name: skills.religion.name,
            displayName: translation.character.skills.religion,
            ability: skills.religion.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.int,
            proficient: skills.religion.proficient,
        },
        sleightOfHand: {
            name: skills.sleightOfHand.name,
            displayName: translation.character.skills.sleightOfHand,
            ability: skills.sleightOfHand.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.dex,
            proficient: skills.sleightOfHand.proficient,
        },
        stealth: {
            name: skills.stealth.name,
            displayName: translation.character.skills.stealth,
            ability: skills.stealth.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.dex,
            proficient: skills.stealth.proficient,
        },
        survival: {
            name: skills.survival.name,
            displayName: translation.character.skills.survival,
            ability: skills.survival.ability,
            abilityDisplayName: translation.character.skills.abilityShorts.wis,
            proficient: skills.survival.proficient,
        },
    };

    return newSkills;
}