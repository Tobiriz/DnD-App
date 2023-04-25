import { WeaponGroupType, DamageType, WeaponProperties } from "./weapons";
import { Dice } from "../dice";

export abstract class Weapon {
    private _name: string;
    private _displayName: string;
    private _type: WeaponGroupType;
    private _damage: Dice;
    private _damageType: DamageType;
    private _range: number;
    private _weight: number;
    private _properties: WeaponProperties;

    constructor(
        name: string,
        displayName: string,
        type: WeaponGroupType,
        damage: Dice,
        damageType:
        DamageType,
        range: number,
        weight: number,
        properties: WeaponProperties
        ) {
        this._name = name;
        this._displayName = displayName;
        this._type = type;
        this._damage = damage;
        this._damageType = damageType;
        this._range = range;
        this._weight = weight;
        this._properties = properties;
    }

    // ----- getters and setters -----
    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get displayName(): string {
        return this._displayName;
    }

    set displayName(displayName: string) {
        this._displayName = displayName;
    }

    get type(): WeaponGroupType {
        return this._type;
    }

    set type(type: WeaponGroupType) {
        this._type = type;
    }

    get damage(): Dice {
        return this._damage;
    }

    set damage(damage: Dice) {
        this._damage = damage;
    }

    get damageType(): DamageType {
        return this._damageType;
    }

    set damageType(damageType: DamageType) {
        this._damageType = damageType;
    }

    get range(): number {
        return this._range;
    }

    set range(range: number) {
        this._range = range;
    }

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }

    get properties(): WeaponProperties {
        return this._properties;
    }

    set properties(properties: WeaponProperties) {
        this._properties = properties;
    }
}