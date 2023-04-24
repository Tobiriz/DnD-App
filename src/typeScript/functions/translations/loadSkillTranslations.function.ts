import { Skills } from '../../interfaces/skills.interface';

export function loadSkillTranslations(lang: string, skills: Skills): void {
    const translation = require(`../../../locales/${lang}.json`);

    skills.acrobatics.displayName = translation.character.skills.acrobatics;
    skills.acrobatics.abilityDisplayName = translation.character.skills.abilityShorts.dex;

    skills.animalHandling.displayName = translation.character.skills.animalHandling;
    skills.animalHandling.abilityDisplayName = translation.character.skills.abilityShorts.wis;

    skills.arcana.displayName = translation.character.skills.arcana;
    skills.arcana.abilityDisplayName = translation.character.skills.abilityShorts.int;

    skills.athletics.displayName = translation.character.skills.athletics;
    skills.athletics.abilityDisplayName = translation.character.skills.abilityShorts.str;

    skills.deception.displayName = translation.character.skills.deception;
    skills.deception.abilityDisplayName = translation.character.skills.abilityShorts.cha;

    skills.history.displayName = translation.character.skills.history;
    skills.history.abilityDisplayName = translation.character.skills.abilityShorts.int;

    skills.insight.displayName = translation.character.skills.insight;
    skills.insight.abilityDisplayName = translation.character.skills.abilityShorts.wis;

    skills.intimidation.displayName = translation.character.skills.intimidation;
    skills.intimidation.abilityDisplayName = translation.character.skills.abilityShorts.cha;

    skills.investigation.displayName = translation.character.skills.investigation;
    skills.investigation.abilityDisplayName = translation.character.skills.abilityShorts.int;

    skills.medicine.displayName = translation.character.skills.medicine;
    skills.medicine.abilityDisplayName = translation.character.skills.abilityShorts.wis;

    skills.nature.displayName = translation.character.skills.nature;
    skills.nature.abilityDisplayName = translation.character.skills.abilityShorts.int;

    skills.perception.displayName = translation.character.skills.perception;
    skills.perception.abilityDisplayName = translation.character.skills.abilityShorts.wis;

    skills.performance.displayName = translation.character.skills.performance;
    skills.performance.abilityDisplayName = translation.character.skills.abilityShorts.cha;

    skills.persuasion.displayName = translation.character.skills.persuasion;
    skills.persuasion.abilityDisplayName = translation.character.skills.abilityShorts.cha;

    skills.religion.displayName = translation.character.skills.religion;
    skills.religion.abilityDisplayName = translation.character.skills.abilityShorts.int;

    skills.sleightOfHand.displayName = translation.character.skills.sleightOfHand;
    skills.sleightOfHand.abilityDisplayName = translation.character.skills.abilityShorts.dex;

    skills.stealth.displayName = translation.character.skills.stealth;
    skills.stealth.abilityDisplayName = translation.character.skills.abilityShorts.dex;

    skills.survival.displayName = translation.character.skills.survival;
    skills.survival.abilityDisplayName = translation.character.skills.abilityShorts.wis;
}