
import { AbilityScores } from '../interfaces/abilityScores.interface';
import { Skills } from '../interfaces/skills.interface';


export class Character {
    constructor(
        private _name: string,
        private _abilityScores: AbilityScores,
        private _skills: Skills[],
        private _proficiencyBonus: number,
    ) { }

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

    get skills(): Skills[] {
        return this._skills;
    }

    set skills(skills: Skills[]) {
        this._skills = skills;
    }

    get proficiencyBonus(): number {
        return this._proficiencyBonus;
    }

    set proficiencyBonus(proficiencyBonus: number) {
        this._proficiencyBonus = proficiencyBonus;
    }

    getAbilityScoreModifier(abilityName: keyof AbilityScores): number {
        const abilityScore = this._abilityScores[abilityName];
        return Math.floor((abilityScore - 10) / 2);
    }

    getSkillModifier(skillName: string): number {
        const skill = this._skills.find(skill => skill.name === skillName);
        if (skill) {
            const abilityModifier = this.getAbilityScoreModifier(skill.ability);
            return skill.proficient ? abilityModifier + this._proficiencyBonus : abilityModifier;
        }
        return 0;
    }
}