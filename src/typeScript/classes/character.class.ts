
import { AbilityScores } from '../interfaces/abilityScores.interface';
import { Skills } from '../interfaces/skills.interface';
import { loadSkillsTranslations } from '../functions/translations/loadSkillsTranslations.function';
import { loadAbilityScoresTranslations } from '../functions/translations/loadAbilityScoresTranslations.function';


export class Character {
    constructor(
        private _language: string,
        private _name: string,
        private _abilityScores: AbilityScores,
        private _skills: Skills,
        private _proficiencyBonus: number,
    ) {
        this._abilityScores = loadAbilityScoresTranslations(this._language, this._abilityScores);
        this._skills = loadSkillsTranslations(this._language, this._skills);
    }

    get language(): string {
        return this._language;
    }

    setLanguage(language: string) {
        this._language = language;
        this._abilityScores = loadAbilityScoresTranslations(this._language, this._abilityScores);
        this._skills = loadSkillsTranslations(this._language, this._skills);
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

    getAbilityScoreModifier(abilityName: keyof AbilityScores): number {
        const abilityScore = this._abilityScores[abilityName].value;
        return Math.floor((abilityScore - 10) / 2);
    }

    getSkillModifier(skillName: keyof Skills): number {
        const skill = this._skills[skillName];
        const abilityScoreModifier = this.getAbilityScoreModifier(skill.ability);
        const proficiencyBonus = skill.proficient ? this._proficiencyBonus : 0;
        return abilityScoreModifier + proficiencyBonus;
    }
}