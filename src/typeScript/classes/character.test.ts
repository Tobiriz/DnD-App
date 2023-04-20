import { Character } from './character.class';
import { AbilityScores } from '../interfaces/abilityScores.interface';
import { Skills } from '../interfaces/skills.interface';

const abilityScores: AbilityScores = { strength: 10, dexterity: 12, constitution: 14, intelligence: 8, wisdom: 15, charisma: 13 };
const skills: Skills[] = [
  { name: 'Acrobatics', ability: 'dexterity', proficient: true },
  { name: 'Animal Handling', ability: 'wisdom', proficient: false },
  { name: 'Arcana', ability: 'intelligence', proficient: false },
  { name: 'Athletics', ability: 'strength', proficient: true },
  { name: 'Investigation', ability: 'intelligence', proficient: true },
  { name: 'Medicine', ability: 'wisdom', proficient: false },
  { name: 'Nature', ability: 'intelligence', proficient: false },
  { name: 'Perception', ability: 'wisdom', proficient: false },
  { name: 'Performance', ability: 'charisma', proficient: false },
  { name: 'Persuasion', ability: 'charisma', proficient: true },
  { name: 'Stealth', ability: 'dexterity', proficient: false },
  { name: 'Survival', ability: 'wisdom', proficient: false },
];
const proficiencyBonus = 2;
const character = new Character('John Doe', abilityScores, skills, proficiencyBonus);

describe('Character', () => {
    it('should create a new instance of Character', () => {
      expect(character).toBeInstanceOf(Character);
    });
  
    it('should have a name property', () => {
      expect(character.name).toBe('John Doe');
    });

    // ------------------------------------------------------------ //
    // ----- ABILITY SCORES --------------------------------------- //
    // ------------------------------------------------------------ //
  
    it('should have an abilityScores property', () => {
      expect(character.abilityScores).toEqual(abilityScores);
    });

    it('should calculate the correct ability score modifiers', () => {
        expect(character.getAbilityScoreModifier('strength')).toBe(0);
        expect(character.getAbilityScoreModifier('dexterity')).toBe(1);
        expect(character.getAbilityScoreModifier('constitution')).toBe(2);
        expect(character.getAbilityScoreModifier('intelligence')).toBe(-1);
        expect(character.getAbilityScoreModifier('wisdom')).toBe(2);
        expect(character.getAbilityScoreModifier('charisma')).toBe(1);
    });

    // ------------------------------------------------------------ //
    // ----- SKILLS ----------------------------------------------- //
    // ------------------------------------------------------------ //
    
    it('should have a skills property', () => {
        expect(character.skills).toEqual(skills);
    });

    it('should have a skills property with 12 elements', () => {
        expect(character.skills.length).toBe(12);
    });

    it('should have the correct skill names', () => {
        expect(character.skills[0].name).toBe('Acrobatics');
        expect(character.skills[1].name).toBe('Animal Handling');
        expect(character.skills[2].name).toBe('Arcana');
        expect(character.skills[3].name).toBe('Athletics');
        expect(character.skills[4].name).toBe('Investigation');
        expect(character.skills[5].name).toBe('Medicine');
        expect(character.skills[6].name).toBe('Nature');
        expect(character.skills[7].name).toBe('Perception');
        expect(character.skills[8].name).toBe('Performance');
        expect(character.skills[9].name).toBe('Persuasion');
        expect(character.skills[10].name).toBe('Stealth');
        expect(character.skills[11].name).toBe('Survival');
    });

    it('should have the correct skill abilities', () => {
        expect(character.skills[0].ability).toBe('dexterity');
        expect(character.skills[1].ability).toBe('wisdom');
        expect(character.skills[2].ability).toBe('intelligence');
        expect(character.skills[3].ability).toBe('strength');
        expect(character.skills[4].ability).toBe('intelligence');
        expect(character.skills[5].ability).toBe('wisdom');
        expect(character.skills[6].ability).toBe('intelligence');
        expect(character.skills[7].ability).toBe('wisdom');
        expect(character.skills[8].ability).toBe('charisma');
        expect(character.skills[9].ability).toBe('charisma');
        expect(character.skills[10].ability).toBe('dexterity');
        expect(character.skills[11].ability).toBe('wisdom');
    });

    it('should have the correct skill proficiency values', () => {
        expect(character.skills[0].proficient).toBe(true);
        expect(character.skills[1].proficient).toBe(false);
        expect(character.skills[2].proficient).toBe(false);
        expect(character.skills[3].proficient).toBe(true);
        expect(character.skills[4].proficient).toBe(true);
        expect(character.skills[5].proficient).toBe(false);
        expect(character.skills[6].proficient).toBe(false);
        expect(character.skills[7].proficient).toBe(false);
        expect(character.skills[8].proficient).toBe(false);
        expect(character.skills[9].proficient).toBe(true);
        expect(character.skills[10].proficient).toBe(false);
        expect(character.skills[11].proficient).toBe(false);
    });
    
    it('should use the correct ability score modifier for each skill', () => {
        expect(character.getAbilityScoreModifier(character.skills[0].ability)).toBe(1);
        expect(character.getAbilityScoreModifier(character.skills[1].ability)).toBe(2);
        expect(character.getAbilityScoreModifier(character.skills[2].ability)).toBe(-1);
        expect(character.getAbilityScoreModifier(character.skills[3].ability)).toBe(0);
        expect(character.getAbilityScoreModifier(character.skills[4].ability)).toBe(-1);
        expect(character.getAbilityScoreModifier(character.skills[5].ability)).toBe(2);
        expect(character.getAbilityScoreModifier(character.skills[6].ability)).toBe(-1);
        expect(character.getAbilityScoreModifier(character.skills[7].ability)).toBe(2);
        expect(character.getAbilityScoreModifier(character.skills[8].ability)).toBe(1);
        expect(character.getAbilityScoreModifier(character.skills[9].ability)).toBe(1);
        expect(character.getAbilityScoreModifier(character.skills[10].ability)).toBe(1);
        expect(character.getAbilityScoreModifier(character.skills[11].ability)).toBe(2);
    });

    // ------------------------------------------------------------ //
    // ----- PROFICIENCY BONUS ------------------------------------ //
    // ------------------------------------------------------------ //
    
    it('should have a proficiency bonus property', () => {
        expect(character.proficiencyBonus).toBe(2);
    });

    it('should calculate the correct skill modifiers', () => {
        expect(character.getSkillModifier('Acrobatics')).toBe(3);
        expect(character.getSkillModifier('Animal Handling')).toBe(2);
        expect(character.getSkillModifier('Arcana')).toBe(-1);
        expect(character.getSkillModifier('Athletics')).toBe(2);
        expect(character.getSkillModifier('Investigation')).toBe(1);
        expect(character.getSkillModifier('Medicine')).toBe(2);
        expect(character.getSkillModifier('Nature')).toBe(-1);
        expect(character.getSkillModifier('Perception')).toBe(2);
        expect(character.getSkillModifier('Performance')).toBe(1);
        expect(character.getSkillModifier('Persuasion')).toBe(3);
        expect(character.getSkillModifier('Stealth')).toBe(1);
        expect(character.getSkillModifier('Survival')).toBe(2);
    });
    
  });