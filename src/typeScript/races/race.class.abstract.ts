import { AbilityScoreBonuses } from '../character/abilities/abilityScores';
import { LanguageType } from '../languages/languages';
import { SizeType } from '../creatures/sizes';
import { SkillType } from '../character/skills/skills';

export abstract class Race {
    private _name: string;
    private _displayName: string;
    private _abilityScoreBonuses: AbilityScoreBonuses;
    private _size: SizeType;
    private _spokenLanguages: LanguageType[];
    private _speed: number;
    private _skillProficiencies: SkillType[];

    constructor(
        name: string,
        displayName: string,
        abilityScoreBonuses: AbilityScoreBonuses,
        size: SizeType,
        spokenLanguages: LanguageType[],
        speed: number,
        skillProficiencies: SkillType[],
    ) {
        this._name = name;
        this._displayName = displayName;
        this._abilityScoreBonuses = abilityScoreBonuses;
        this._size = size;
        this._spokenLanguages = spokenLanguages;
        this._speed = speed;
        this._skillProficiencies = skillProficiencies;
    }
}