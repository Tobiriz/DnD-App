
import { AbilityScoreType } from '../character/abilities/abilityScores'
import { SkillType } from '../character/skills/skills'
import { SizeType } from '../creatures/sizes'
import { LanguageType } from '../languages/languages'
import { Race } from './race.class.abstract'


export class Human extends Race {
    constructor (extraLanguage?: LanguageType) {
        super(
            'human',
            'Human',
            {
                strength: 1,
                dexterity: 1,
                constitution: 1,
                intelligence: 1,
                wisdom: 1,
                charisma: 1
            },
            SizeType.medium,
            [
                LanguageType.common,
                extraLanguage || LanguageType.common
            ],
            30,
            []
        )
    }
}

export class VariantHuman extends Race {
    constructor (extraLanguage?: LanguageType, abilityScoreIncrease1?: AbilityScoreType, abilityScoreIncrease2?: AbilityScoreType, extraSkillProficiency?: SkillType) {

        if (abilityScoreIncrease1 === abilityScoreIncrease2) {
            throw new Error("abilityScoreIncrease1 und abilityScoreIncrease2 dürfen nicht den gleichen AbilityScoreType haben.");
        }

        super(
            'variantHuman',
            'Variant Human',
            {
                strength: abilityScoreIncrease1 || abilityScoreIncrease2 === AbilityScoreType.strength ? 1 : 0,
                dexterity: abilityScoreIncrease1 || abilityScoreIncrease2 === AbilityScoreType.dexterity ? 1 : 0,
                constitution: abilityScoreIncrease1 || abilityScoreIncrease2 === AbilityScoreType.constitution ? 1 : 0,
                intelligence: abilityScoreIncrease1 || abilityScoreIncrease2 === AbilityScoreType.intelligence ? 1 : 0,
                wisdom: abilityScoreIncrease1 || abilityScoreIncrease2 === AbilityScoreType.wisdom ? 1 : 0,
                charisma: abilityScoreIncrease1 || abilityScoreIncrease2 === AbilityScoreType.charisma ? 1 : 0
            },
            SizeType.medium,
            [
                LanguageType.common,
                extraLanguage || LanguageType.common
            ],
            30,
            [
                extraSkillProficiency || SkillType.acrobatics
            ]
        )
    }
}