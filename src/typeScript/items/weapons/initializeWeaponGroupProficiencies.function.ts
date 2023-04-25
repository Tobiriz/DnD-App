import { WeaponGroupProficiencies, WeaponGroupType, WeaponGroups } from "../weapons/weapons";

export function initializeWeaponGroupProficiencies(weaponGroupProficiencies: WeaponGroupProficiencies): WeaponGroups {
    const initializedWeaponGroupProficiencies: WeaponGroups = {
        simpleMelee: {
            name: WeaponGroupType.simpleMelee,
            displayName: "",
            proficient: weaponGroupProficiencies.simpleMelee
        },
        simpleRanged: {
            name: WeaponGroupType.simpleRanged,
            displayName: "",
            proficient: weaponGroupProficiencies.simpleRanged
        },
        martialMelee: {
            name: WeaponGroupType.martialMelee,
            displayName: "",
            proficient: weaponGroupProficiencies.martialMelee
        },
        martialRanged: {
            name: WeaponGroupType.martialRanged,
            displayName: "",
            proficient: weaponGroupProficiencies.martialRanged
        },
    }

    return initializedWeaponGroupProficiencies;
}