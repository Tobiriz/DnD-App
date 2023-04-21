
// ----- import interfaces -----
import { AbilityScores } from '../interfaces/abilityScores.interface';
import { Skills } from '../interfaces/skills.interface';

// ----- import functions -----
import { loadSkillTranslations } from '../functions/translations/loadSkillTranslations.function';
import { loadAbilityScoreTranslations } from '../functions/translations/loadAbilityScoreTranslations.function';


export class Character {
    constructor(
        private _language: string,
        private _name: string,
        private _abilityScores: AbilityScores,
        private _skills: Skills,
        private _proficiencyBonus: number,
    ) {
        this.setLanguage(this._language);
    }

    // ----- getters and setters -----

    get language(): string {
        return this._language;
    }
    
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
    
    get abilityScores(): AbilityScores {
        return this._abilityScores;
    }
    
    set abilityScores(abilityScores: AbilityScores) {
        this._abilityScores = abilityScores;
    }

    get skills(): Skills {
        return this._skills;
    }
    
    set skills(skills: Skills) {
        this._skills = skills;
    }
    
    get proficiencyBonus(): number {
        return this._proficiencyBonus;
    }
    
    set proficiencyBonus(proficiencyBonus: number) {
        this._proficiencyBonus = proficiencyBonus;
    }
    
    // ----- public methods -----

    /**
     * Sets the language for the character sheet.
     * @param language - A string that represents the language in which the character sheet should be displayed.
     * @enum {string} - Valid languages are: 'en' (English), 'de' (German).
     * @throws {Error} If an unsupported language is passed as an argument.
     */
    setLanguage(language: string) {
        const validLanguages: string[] = ['en', 'de'];

        if (!validLanguages.includes(language)) {
            throw new Error(`Unsupported language: ${language}`);
        }

        this._language = language;
        this._abilityScores = loadAbilityScoreTranslations(this._language, this._abilityScores);
        this._skills = loadSkillTranslations(this._language, this._skills);
    }
    
    /**
     * Calculates the ability score modifier for a specified ability score.
     * @param {keyof AbilityScores} abilityName - A string that represents the name of the ability score for which the modifier needs to be calculated.
     * @enum {string} - Valid ability names are: 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'.
     * @returns {number} A number that represents the modifier for the specified ability score.
    */
   getAbilityScoreModifier(abilityName: keyof AbilityScores): number {
       const abilityScore = this._abilityScores[abilityName].value;
       return Math.floor((abilityScore - 10) / 2);
    }
    
    /**
     * Calculates the modifier for a specified skill based on the character's ability score and proficiency bonus.
     * @param {keyof Skills} skillName - A string that represents the name of the skill for which the modifier needs to be calculated.
     * @enum {string} - Valid skill names are: 'acrobatics', 'animalHandling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleightOfHand', 'stealth', 'survival'.
     * @returns {number} A number that represents the modifier for the specified skill.
     */
    getSkillModifier(skillName: keyof Skills): number {
        const skill = this._skills[skillName];
        const abilityScoreModifier = this.getAbilityScoreModifier(skill.ability);
        const proficiencyBonus = skill.proficient ? this._proficiencyBonus : 0;
        return abilityScoreModifier + proficiencyBonus;
    }
}