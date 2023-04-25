
import { AbilityScoreValues, AbilityScores, AbilityScoreKeys } from './abilities/abilityScores';
import { SkillProficiencies, Skills, SkillKeys } from './skills/skills';
import { SpokenLanguages, Languages, LanguageKeys } from '../languages/languages';
import { ScriptKeys } from '../languages/scripts';

// ----- import interfaces -----

// ----- import interfaces for configuration -----
// ----- import classes -----

// ----- import functions -----

// ----- import functions for initialization -----
import { initializeSkills } from './skills/initializeSkills.function';
import { initializeAbilityScores } from './abilities/initializeAbilityScores.function';
import { initializeLanguages } from '../languages/initializeLanguages.function';

// ----- import enums -----
import { SupportedLanguages } from '../enums/supportedLanguages.enum';

// ----- import types -----


const TRANSLATION_PATH: string = '../../locales/';

export class Character {
    private _interfaceLanguage: SupportedLanguages;
    private _name: string;
    private _abilityScores: AbilityScores;
    private _skills: Skills;
    private _proficiencyBonus: number;
    private _inGameLanguages: Languages;

    constructor(
        language: SupportedLanguages,
        name: string,
        abilityScoreValues: AbilityScoreValues,
        skillProficiencies: SkillProficiencies,
        proficiencyBonus: number,
        spokenLanguages: SpokenLanguages,
    ) {
        this._interfaceLanguage = language;
        this._name = name;
        this._abilityScores = initializeAbilityScores(abilityScoreValues);
        this._skills = initializeSkills(skillProficiencies);
        this._proficiencyBonus = proficiencyBonus;
        this._inGameLanguages = initializeLanguages(spokenLanguages);

        this.setLanguage(language);
    }

    // ----- getters and setters -----

    get language(): string {
        return this._interfaceLanguage;
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

    get spokenLanguages(): Languages {
        return this._inGameLanguages;
    }
    
    // ----- public methods -----

    /**
     * Sets the language for the character sheet.
     * @param language - A string that represents the language in which the character sheet should be displayed.
     * @enum {Languages} - Valid languages are: 'en' (English), 'de' (German).
     * @throws {Error} If an unsupported language is passed as an argument.
     */
    setLanguage(_interfaceLanguage: SupportedLanguages) {
        this._interfaceLanguage = _interfaceLanguage;
        this.updateTranslations();
    }
    
    /**
     * Calculates the ability score modifier for a specified ability score.
     * @param {keyof AbilityScores} abilityName - A string that represents the name of the ability score for which the modifier needs to be calculated.
     * @enum {string} - Valid ability names are: 'strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'.
     * @returns {number} A number that represents the modifier for the specified ability score.
    */
   getAbilityScoreModifier(abilityName: AbilityScoreKeys): number {
       const abilityScore = this._abilityScores[abilityName].value;
       return Math.floor((abilityScore - 10) / 2);
    }
    
    /**
     * Calculates the modifier for a specified skill based on the character's ability score and proficiency bonus.
     * @param {keyof Skills} skillName - A string that represents the name of the skill for which the modifier needs to be calculated.
     * @enum {string} - Valid skill names are: 'acrobatics', 'animalHandling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion', 'religion', 'sleightOfHand', 'stealth', 'survival'.
     * @returns {number} A number that represents the modifier for the specified skill.
    */
   getSkillModifier(skillName: SkillKeys): number {
        const skill = this._skills[skillName];
        const abilityScoreModifier = this.getAbilityScoreModifier(skill.ability);
        const proficiencyBonus = skill.proficient ? this._proficiencyBonus : 0;
        return abilityScoreModifier + proficiencyBonus;
    }
    
    // ----- private methods -----

    /**
     * Updates the display names of the ability scores and skills in the current
     * instance, based on the selected language.
     */
    private updateTranslations() {
        // Build the path to the translation JSON file for the selected language
        const translationPath = TRANSLATION_PATH + this._interfaceLanguage + '.json';
        // Import the translation JSON file
        const translationFile = require(translationPath);

        for (const abilityScore in this._abilityScores) {
            const key = abilityScore as AbilityScoreKeys;
            this._abilityScores[key].displayName = translationFile.character.abilities[key];
        }

        for (const skill in this._skills) {
            const key = skill as SkillKeys;
            this._skills[key].displayName = translationFile.character.skills[key];
            this._skills[key].abilityDisplayName = translationFile.character.skills.abilityAbbreviations[this._skills[key].ability];
        }

        for (const language in this._inGameLanguages) {
            const languageKey = language as LanguageKeys;
            this._inGameLanguages[languageKey].displayName = translationFile.character.languages[languageKey];
            const scriptKey = this._inGameLanguages[languageKey].script.name as ScriptKeys;
            this._inGameLanguages[languageKey].script.displayName = translationFile.character.languages.scripts[scriptKey];
        }
    }
}