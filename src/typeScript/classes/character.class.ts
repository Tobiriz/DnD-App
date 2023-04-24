
// ----- import interfaces -----
import { AbilityScores } from '../interfaces/abilityScores.interface';
import { Skills } from '../interfaces/skills.interface';

// ----- import interfaces for configuration -----
import { SkillProficiencies } from '../interfaces/configuration/skillProficiencies.interface.configuration';
import { AbilityScoreValues } from '../interfaces/configuration/abilityScoreValues.interface.configuration';

// ----- import classes -----

// ----- import functions -----
import { loadSkillTranslations } from '../functions/translations/loadSkillTranslations.function';
import { loadAbilityScoreTranslations } from '../functions/translations/loadAbilityScoreTranslations.function';

// ----- import functions for initialization -----
import { initializeSkills } from '../functions/initializations/initializeSkills.function';
import { initializeAbilityScores } from '../functions/initializations/initializeAbilityScores.function';

// ----- import enums -----
import { Languages } from '../enums/languages.enum';


const TRANSLATION_PATH: string = '../../locales/';

export class Character {
    private _language: Languages;
    private _name: string;
    private _abilityScores: AbilityScores;
    private _skills: Skills;
    private _proficiencyBonus: number;

    constructor(
        language: Languages,
        name: string,
        abilityScoreValues: AbilityScoreValues,
        skillProficiencies: SkillProficiencies,
        proficiencyBonus: number,
    ) {
        this._language = language;
        this._name = name;
        this._abilityScores = initializeAbilityScores(abilityScoreValues);
        this._skills = initializeSkills(skillProficiencies);
        this._proficiencyBonus = proficiencyBonus;

        this.setLanguage(language);
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
     * @enum {Languages} - Valid languages are: 'en' (English), 'de' (German).
     * @throws {Error} If an unsupported language is passed as an argument.
     */
    setLanguage(language: Languages) {
        this._language = language;
        this.updateTranslations();
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
    
    // ----- private methods -----

    private updateTranslations() {
        const translationPath = TRANSLATION_PATH + this._language + '.json';
        const translationFile = require(translationPath);

        for (const abilityScore in this._abilityScores) {
            this._abilityScores[abilityScore].displayName = translationFile.character.abilities[abilityScore];
        }

        for (const skill in this._skills) {
            this._skills[skill].displayName = translationFile.character.skills[skill];
            this._skills[skill].abilityDisplayName = translationFile.character.skills.abilityAbbreviations[this._skills[skill].ability];
        }
    }
}