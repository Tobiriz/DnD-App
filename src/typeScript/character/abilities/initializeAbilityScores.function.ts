import { AbilityScoreType, AbilityScoreValues, AbilityScores } from './abilityScores';

export function initializeAbilityScores(abilityScoreValues: AbilityScoreValues): AbilityScores {
    const intializedAbilityScores: AbilityScores = {
        strength: {
            name: AbilityScoreType.strength,
            displayName: '',
            value: abilityScoreValues.strength,
        },
        dexterity: {
            name: AbilityScoreType.dexterity,
            displayName: '',
            value: abilityScoreValues.dexterity,
        },
        constitution: {
            name: AbilityScoreType.constitution,
            displayName: '',
            value: abilityScoreValues.constitution,
        },
        intelligence: {
            name: AbilityScoreType.intelligence,
            displayName: '',
            value: abilityScoreValues.intelligence,
        },
        wisdom: {
            name: AbilityScoreType.wisdom,
            displayName: '',
            value: abilityScoreValues.wisdom,
        },
        charisma: {
            name: AbilityScoreType.charisma,
            displayName: '',
            value: abilityScoreValues.charisma,
        }
    };

    return intializedAbilityScores;
}