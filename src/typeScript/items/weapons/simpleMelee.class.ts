import { Weapon } from "./weapon.class";
import { WeaponGroupType, DamageType, WeaponProperties, WeaponProperty } from "./weapons";
import { Dice, DiceType } from "../dice";

export class SimpleMeleeWeapon extends Weapon {
    constructor(
        name: string,
        displayName: string,
        damage: Dice,
        damageType: DamageType,
        weight: number,
        properties: WeaponProperties
    ) {
        super(
            name,
            displayName,
            WeaponGroupType.simpleMelee,
            damage,
            damageType,
            0,
            weight,
            properties
        );
    }
}

export class Club extends SimpleMeleeWeapon {
    constructor() {
        super(
            "club",
            "Club",
            {
                type: DiceType.d4,
                count: 1
            },
            DamageType.bludgeoning,
            2,
            {
                light: WeaponProperty.light,
            }
        );
    }
}

export class Dagger extends SimpleMeleeWeapon {
    constructor() {
        super(
            "dagger",
            "Dagger",
            {
                type: DiceType.d4,
                count: 1
            },
            DamageType.piercing,
            1,
            {
                finesse: WeaponProperty.finesse,
                light: WeaponProperty.light,
                thrown: {
                    short: 20,
                    long: 60,
                },
            }
        );
    }
}

export class Greatclub extends SimpleMeleeWeapon {
    constructor() {
        super(
            "greatclub",
            "Greatclub",
            {
                type: DiceType.d8,
                count: 1
            },
            DamageType.bludgeoning,
            10,
            {
                twoHanded: WeaponProperty.twoHanded,
            }
        );
    }
}

export class Handaxe extends SimpleMeleeWeapon {
    constructor() {
        super(
            "handaxe",
            "Handaxe",
            {
                type: DiceType.d6,
                count: 1
            },
            DamageType.slashing,
            2,
            {
                light: WeaponProperty.light,
                thrown: {
                    short: 20,
                    long: 60,
                },
            }
        );
    }
}

export class Javelin extends SimpleMeleeWeapon {
    constructor() {
        super(
            "javelin",
            "Javelin",
            {
                type: DiceType.d6,
                count: 1
            },
            DamageType.piercing,
            2,
            {
                thrown: {
                    short: 30,
                    long: 120,
                },
            }
        );
    }
}

export class LightHammer extends SimpleMeleeWeapon {
    constructor() {
        super(
            "light-hammer",
            "Light Hammer",
            {
                type: DiceType.d4,
                count: 1
            },
            DamageType.bludgeoning,
            2,
            {
                light: WeaponProperty.light,
                thrown: {
                    short: 20,
                    long: 60,
                },
            }
        );
    }
}

export class Mace extends SimpleMeleeWeapon {
    constructor() {
        super(
            "mace",
            "Mace",
            {
                type: DiceType.d6,
                count: 1
            },
            DamageType.bludgeoning,
            4,
            {
            }
        );
    }
}

export class Quarterstaff extends SimpleMeleeWeapon {
    constructor() {
        super(
            "quarterstaff",
            "Quarterstaff",
            {
                type: DiceType.d6,
                count: 1
            },
            DamageType.bludgeoning,
            4,
            {
                versatile: {
                    damage: DiceType.d8,
                    count: 1,
                },
            }
        );
    }
}

export class Sickle extends SimpleMeleeWeapon {
    constructor() {
        super(
            "sickle",
            "Sickle",
            {
                type: DiceType.d4,
                count: 1
            },
            DamageType.slashing,
            2,
            {
                light: WeaponProperty.light,
            }
        );
    }
}

export class Spear extends SimpleMeleeWeapon {
    constructor() {
        super(
            "spear",
            "Spear",
            {
                type: DiceType.d6,
                count: 1
            },
            DamageType.piercing,
            3,
            {
                thrown: {
                    short: 20,
                    long: 60,
                },
                versatile: {
                    damage: DiceType.d8,
                    count: 1,
                },
            }
        );
    }
}