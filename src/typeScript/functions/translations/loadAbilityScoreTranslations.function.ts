import { AbilityScores } from "../../interfaces/abilityScores.interface";

export function loadAbilityScoreTranslations(lang: string, abilityScores: AbilityScores): AbilityScores {
    const translation = require(`../../../locales/${lang}.json`);

    const newAbilityScores: AbilityScores = {
        strength: {
            name: abilityScores.strength.name,
            displayName: translation.character.abilities.strength,
            value: abilityScores.strength.value,
        },
        dexterity: {
            name: abilityScores.dexterity.name,
            displayName: translation.character.abilities.dexterity,
            value: abilityScores.dexterity.value,
        },
        constitution: {
            name: abilityScores.constitution.name,
            displayName: translation.character.abilities.constitution,
            value: abilityScores.constitution.value,
        },
        intelligence: {
            name: abilityScores.intelligence.name,
            displayName: translation.character.abilities.intelligence,
            value: abilityScores.intelligence.value,
        },
        wisdom: {
            name: abilityScores.wisdom.name,
            displayName: translation.character.abilities.wisdom,
            value: abilityScores.wisdom.value,
        },
        charisma: {
            name: abilityScores.charisma.name,
            displayName: translation.character.abilities.charisma,
            value: abilityScores.charisma.value,
        },
    };

    return newAbilityScores;
}