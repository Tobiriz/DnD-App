interface AbilityScore {
    name: string;
    displayName: string;
    value: number;
}

export interface AbilityScores {
    [key: string]: AbilityScore;
    strength: AbilityScore;
    dexterity: AbilityScore;
    constitution: AbilityScore;
    intelligence: AbilityScore;
    wisdom: AbilityScore;
    charisma: AbilityScore;
}