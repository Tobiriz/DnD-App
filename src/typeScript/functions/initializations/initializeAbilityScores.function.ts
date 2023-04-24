import { AbilityScoreValues } from "../../interfaces/configuration/abilityScoreValues.interface.configuration";
import { AbilityScores } from "../../interfaces/abilityScores.interface";

export function initializeAbilityScores(abilityScoreValues: AbilityScoreValues): AbilityScores {
    const intializedAbilityScores: AbilityScores = {
        strength: {
            name: 'strength',
            displayName: '',
            value: abilityScoreValues.strength,
        },
        dexterity: {
            name: 'dexterity',
            displayName: '',
            value: abilityScoreValues.dexterity,
        },
        constitution: {
            name: 'constitution',
            displayName: '',
            value: abilityScoreValues.constitution,
        },
        intelligence: {
            name: 'intelligence',
            displayName: '',
            value: abilityScoreValues.intelligence,
        },
        wisdom: {
            name: 'wisdom',
            displayName: '',
            value: abilityScoreValues.wisdom,
        },
        charisma: {
            name: 'charisma',
            displayName: '',
            value: abilityScoreValues.charisma,
        }
    };

    return intializedAbilityScores;
}