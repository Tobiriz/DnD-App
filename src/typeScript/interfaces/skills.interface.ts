import { AbilityScores } from './abilityScores.interface';

interface Skill {
    name: string;
    displayName: string;
    ability: keyof AbilityScores;
    abilityDisplayName: string;
    proficient: boolean;
}

export interface Skills {
    acrobatics: Skill;
    animalHandling: Skill;
    arcana: Skill;
    athletics: Skill;
    deception: Skill;
    history: Skill;
    insight: Skill;
    intimidation: Skill;
    investigation: Skill;
    medicine: Skill;
    nature: Skill;
    perception: Skill;
    performance: Skill;
    persuasion: Skill;
    religion: Skill;
    sleightOfHand: Skill;
    stealth: Skill;
    survival: Skill;
}