export enum ArmorType {
    light = "light",
    medium = "medium",
    heavy = "heavy",
    shield = "shield",
}

export interface Armor {
    name: string;
    displayName: string;
    type: ArmorType;
}

export type ArmorProficiencies = Record<ArmorType, boolean>;