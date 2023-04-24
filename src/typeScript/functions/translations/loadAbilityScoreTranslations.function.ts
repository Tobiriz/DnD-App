import { AbilityScores } from "../../interfaces/abilityScores.interface";

export function loadAbilityScoreTranslations(lang: string, abilityScores: AbilityScores): void {
    const translation = require(`../../../locales/${lang}.json`);

    abilityScores.strength.displayName = translation.character.abilities.strength;
    abilityScores.dexterity.displayName = translation.character.abilities.dexterity;
    abilityScores.constitution.displayName = translation.character.abilities.constitution;
    abilityScores.intelligence.displayName = translation.character.abilities.intelligence;
    abilityScores.wisdom.displayName = translation.character.abilities.wisdom;
    abilityScores.charisma.displayName = translation.character.abilities.charisma;
}