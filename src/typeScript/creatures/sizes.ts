export enum SizeType {
    tiny = "tiny",
    small = "small",
    medium = "medium",
    large = "large",
    huge = "huge",
    gargantuan = "gargantuan",
}

export interface Size {
    name: string;
    displayName: string;
    type: SizeType;
}

export type Sizes = Record<SizeType, Size>;
export type SizeKeys = keyof typeof SizeType;
