import { AbilityScores } from './abilityScores.interface';

export interface Skills {
    name: string;
    ability: keyof AbilityScores;
    proficient: boolean;
}