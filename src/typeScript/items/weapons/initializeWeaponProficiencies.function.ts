import { WeaponProficiencies, WeaponGroupProficiencies, Weapons, WeaponGroupType, WeaponType } from "../weapons/weapons";

export function initializeWeaponProficiencies(weaponProficiencies: WeaponProficiencies, weaponGroupProficiencies: WeaponGroupProficiencies): Weapons {
    const initializedWeaponProficiencies: Weapons = {
        club: {
            name: WeaponType.club,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.club || weaponGroupProficiencies.simpleMelee
        },
        dagger: {
            name: WeaponType.dagger,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.dagger || weaponGroupProficiencies.simpleMelee
        },
        greatclub: {
            name: WeaponType.greatclub,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.greatclub || weaponGroupProficiencies.simpleMelee
        },
        handaxe: {
            name: WeaponType.handaxe,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.handaxe || weaponGroupProficiencies.simpleMelee
        },
        javelin: {
            name: WeaponType.javelin,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.javelin || weaponGroupProficiencies.simpleMelee
        },
        lightHammer: {
            name: WeaponType.lightHammer,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.lightHammer || weaponGroupProficiencies.simpleMelee
        },
        mace: {
            name: WeaponType.mace,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.mace || weaponGroupProficiencies.simpleMelee
        },
        quarterstaff: {
            name: WeaponType.quarterstaff,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.quarterstaff || weaponGroupProficiencies.simpleMelee
        },
        sickle: {
            name: WeaponType.sickle,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.sickle || weaponGroupProficiencies.simpleMelee
        },
        spear: {
            name: WeaponType.spear,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleMelee,
            proficient: weaponProficiencies.spear || weaponGroupProficiencies.simpleMelee
        },
        lightCrossbow: {
            name: WeaponType.lightCrossbow,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleRanged,
            proficient: weaponProficiencies.lightCrossbow || weaponGroupProficiencies.simpleRanged
        },
        dart: {
            name: WeaponType.dart,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleRanged,
            proficient: weaponProficiencies.dart || weaponGroupProficiencies.simpleRanged
        },
        shortbow: {
            name: WeaponType.shortbow,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleRanged,
            proficient: weaponProficiencies.shortbow || weaponGroupProficiencies.simpleRanged
        },
        sling: {
            name: WeaponType.sling,
            displayName: "",
            weaponGroup: WeaponGroupType.simpleRanged,
            proficient: weaponProficiencies.sling || weaponGroupProficiencies.simpleRanged
        },
        battleaxe: {
            name: WeaponType.battleaxe,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.battleaxe || weaponGroupProficiencies.martialMelee
        },
        flail: {
            name: WeaponType.flail,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.flail || weaponGroupProficiencies.martialMelee
        },
        glaive: {
            name: WeaponType.glaive,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.glaive || weaponGroupProficiencies.martialMelee
        },
        greataxe: {
            name: WeaponType.greataxe,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.greataxe || weaponGroupProficiencies.martialMelee
        },
        greatsword: {
            name: WeaponType.greatsword,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.greatsword || weaponGroupProficiencies.martialMelee
        },
        halberd: {
            name: WeaponType.halberd,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.halberd || weaponGroupProficiencies.martialMelee
        },
        lance: {
            name: WeaponType.lance,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.lance || weaponGroupProficiencies.martialMelee
        },
        longsword: {
            name: WeaponType.longsword,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.longsword || weaponGroupProficiencies.martialMelee
        },
        maul: {
            name: WeaponType.maul,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.maul || weaponGroupProficiencies.martialMelee
        },
        morningstar: {
            name: WeaponType.morningstar,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.morningstar || weaponGroupProficiencies.martialMelee
        },
        pike: {
            name: WeaponType.pike,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.pike || weaponGroupProficiencies.martialMelee
        },
        rapier: {
            name: WeaponType.rapier,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.rapier || weaponGroupProficiencies.martialMelee
        },
        scimitar: {
            name: WeaponType.scimitar,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.scimitar || weaponGroupProficiencies.martialMelee
        },
        shortsword: {
            name: WeaponType.shortsword,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.shortsword || weaponGroupProficiencies.martialMelee
        },
        trident: {
            name: WeaponType.trident,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.trident || weaponGroupProficiencies.martialMelee
        },
        warPick: {
            name: WeaponType.warPick,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.warPick || weaponGroupProficiencies.martialMelee
        },
        warhammer: {    
            name: WeaponType.warhammer,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.warhammer || weaponGroupProficiencies.martialMelee
        },
        whip: {
            name: WeaponType.whip,
            displayName: "",
            weaponGroup: WeaponGroupType.martialMelee,
            proficient: weaponProficiencies.whip || weaponGroupProficiencies.martialMelee
        },
        blowgun: {
            name: WeaponType.blowgun,
            displayName: "",
            weaponGroup: WeaponGroupType.martialRanged,
            proficient: weaponProficiencies.blowgun || weaponGroupProficiencies.martialRanged
        },
        handCrossbow: {
            name: WeaponType.handCrossbow,
            displayName: "",
            weaponGroup: WeaponGroupType.martialRanged,
            proficient: weaponProficiencies.handCrossbow || weaponGroupProficiencies.martialRanged
        },
        heavyCrossbow: {
            name: WeaponType.heavyCrossbow,
            displayName: "",
            weaponGroup: WeaponGroupType.martialRanged,
            proficient: weaponProficiencies.heavyCrossbow || weaponGroupProficiencies.martialRanged
        },
        longbow: {
            name: WeaponType.longbow,
            displayName: "",
            weaponGroup: WeaponGroupType.martialRanged,
            proficient: weaponProficiencies.longbow || weaponGroupProficiencies.martialRanged
        },
        net: {
            name: WeaponType.net,
            displayName: "",
            weaponGroup: WeaponGroupType.martialRanged,
            proficient: weaponProficiencies.net || weaponGroupProficiencies.martialRanged
        },
    };

    return initializedWeaponProficiencies;
}