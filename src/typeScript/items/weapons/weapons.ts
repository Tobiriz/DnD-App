import { DiceType } from "../dice";

export enum WeaponGroupType {
    simpleMelee = "simpleMelee",
    martialMelee = "martialMelee",
    simpleRanged = "simpleRanged",
    martialRanged = "martialRanged",
}

export interface WeaponGroup {
    name: string;
    displayName: string;
    proficient: boolean;
}

export type WeaponGroupProficiencies = Record<WeaponGroupType, boolean>;
export type WeaponGroups = Record<WeaponGroupType, WeaponGroup>;
export type WeaponGroupKeys = keyof typeof WeaponGroupType;


export enum WeaponType {
    club = "club",
    dagger = "dagger",
    greatclub = "greatclub",
    handaxe = "handaxe",
    javelin = "javelin",
    lightHammer = "lightHammer",
    mace = "mace",
    quarterstaff = "quarterstaff",
    sickle = "sickle",
    spear = "spear",
    lightCrossbow = "lightCrossbow",
    dart = "dart",
    shortbow = "shortbow",
    sling = "sling",
    battleaxe = "battleaxe",
    flail = "flail",
    glaive = "glaive",
    greataxe = "greataxe",
    greatsword = "greatsword",
    halberd = "halberd",
    lance = "lance",
    longsword = "longsword",
    maul = "maul",
    morningstar = "morningstar",
    pike = "pike",
    rapier = "rapier",
    scimitar = "scimitar",
    shortsword = "shortsword",
    trident = "trident",
    warPick = "warPick",
    warhammer = "warhammer",
    whip = "whip",
    blowgun = "blowgun",
    handCrossbow = "handCrossbow",
    heavyCrossbow = "heavyCrossbow",
    longbow = "longbow",
    net = "net",
}

export interface Weapon {
    name: string;
    displayName: string;
    weaponGroup: WeaponGroupType;
    proficient: boolean;
}

export type WeaponProficiencies = Record<WeaponType, boolean>;
export type Weapons = Record<WeaponType, Weapon>;
export type WeaponKeys = keyof typeof WeaponType;


export enum DamageType {
    bludgeoning = "bludgeoning",
    piercing = "piercing",
    slashing = "slashing",
}

export enum WeaponProperty {
    finesse = "finesse",
    heavy = "heavy",
    light = "light",
    loading = "loading",
    reach = "reach",
    special = "special",
    twoHanded = "twoHanded",
}

export type AmmunitionRange = {
    short: number;
    long: number;
};

export type ThrownRange = {
    short: number;
    long: number;
};

export type VersatileDamage = {
    damage: DiceType;
    count: number;
};

export interface WeaponProperties {
    ammunition?: AmmunitionRange;
    thrown?: ThrownRange;
    versatile?: VersatileDamage;
    [key: string]: any;
}
