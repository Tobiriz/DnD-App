import { Character } from './character.class';
import { AbilityScores } from '../interfaces/abilityScores.interface';
import { Skills } from '../interfaces/skills.interface';

const abilityScores: AbilityScores = { 
    strength: { name: 'strength', displayName: 'Strength', value: 10 },
    dexterity: { name: 'dexterity', displayName: 'Dexterity', value: 12 },
    constitution: { name: 'constitution', displayName: 'Constitution', value: 14 },
    intelligence: { name: 'intelligence', displayName: 'Intelligence', value: 8 },
    wisdom: { name: 'wisdom', displayName: 'Wisdom', value: 14 },
    charisma: { name: 'charisma', displayName: 'Charisma', value: 12 },
};
const skills: Skills = {
    acrobatics: { name: 'acrobatics', displayName: 'Acrobatics', ability: 'dexterity', abilityDisplayName: 'DEX', proficient: false },
    animalHandling: { name: 'animal Handling', displayName: 'Animal Handling', ability: 'wisdom', abilityDisplayName: 'WIS', proficient: false },
    arcana: { name: 'arcana', displayName: 'Arcana', ability: 'intelligence', abilityDisplayName: 'INT', proficient: true },
    athletics: { name: 'athletics', displayName: 'Athletics', ability: 'strength', abilityDisplayName: 'STR', proficient: false },
    deception: { name: 'deception', displayName: 'Deception', ability: 'charisma', abilityDisplayName: 'CHA', proficient: false },
    history: { name: 'history', displayName: 'History', ability: 'intelligence', abilityDisplayName: 'INT', proficient: true },
    insight: { name: 'insight', displayName: 'Insight', ability: 'wisdom', abilityDisplayName: 'WIS', proficient: false },
    intimidation: { name: 'intimidation', displayName: 'Intimidation', ability: 'charisma', abilityDisplayName: 'CHA', proficient: false },
    investigation: { name: 'investigation', displayName: 'Investigation', ability: 'intelligence', abilityDisplayName: 'INT', proficient: true },
    medicine: { name: 'medicine', displayName: 'Medicine', ability: 'wisdom', abilityDisplayName: 'WIS', proficient: false },
    nature: { name: 'nature', displayName: 'Nature', ability: 'intelligence', abilityDisplayName: 'INT', proficient: false },
    perception: { name: 'perception', displayName: 'Perception', ability: 'wisdom', abilityDisplayName: 'WIS', proficient: true },
    performance: { name: 'performance', displayName: 'Performance', ability: 'charisma', abilityDisplayName: 'CHA', proficient: true },
    persuasion: { name: 'persuasion', displayName: 'Persuasion', ability: 'charisma', abilityDisplayName: 'CHA', proficient: false },
    religion: { name: 'religion', displayName: 'Religion', ability: 'intelligence', abilityDisplayName: 'INT', proficient: false },
    sleightOfHand: { name: 'sleight of Hand', displayName: 'Sleight of Hand', ability: 'dexterity', abilityDisplayName: 'DEX', proficient: false },
    stealth: { name: 'stealth', displayName: 'Stealth', ability: 'dexterity', abilityDisplayName: 'DEX', proficient: true },
    survival: { name: 'survival', displayName: 'Survival', ability: 'wisdom', abilityDisplayName: 'WIS', proficient: true },
};
const proficiencyBonus = 2;
const character = new Character('en', 'John Doe', abilityScores, skills, proficiencyBonus);

describe('Character', () => {
    it('should create a new instance of Character', () => {
      expect(character).toBeInstanceOf(Character);
    });
    
    it('should have a name property', () => {
      expect(character.name).toBe('John Doe');
    });
    
    it('should switch the language', () => {
      character.setLanguage('de')
      expect(character.language).toBe('de');
      character.setLanguage('en')
      expect(character.language).toBe('en');
    });

    it('should throw an error if the language is not supported', () => {
      expect(() => character.setLanguage('not supportet')).toThrowError('Unsupported language: not supportet');
    });
    
    // ------------------------------------------------------------ //
    // ----- ABILITY SCORES --------------------------------------- //
    // ------------------------------------------------------------ //
  
    it('should have an abilityScores property', () => {
      character.setLanguage('en');
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

    it('should display the correct ability score names in english', () => {
      character.setLanguage('en');
      expect(character.abilityScores.strength.displayName).toBe('Strength');
      expect(character.abilityScores.dexterity.displayName).toBe('Dexterity');
      expect(character.abilityScores.constitution.displayName).toBe('Constitution');
      expect(character.abilityScores.intelligence.displayName).toBe('Intelligence');
      expect(character.abilityScores.wisdom.displayName).toBe('Wisdom');
      expect(character.abilityScores.charisma.displayName).toBe('Charisma');
    });

    it('should display the correct ability score names in german', () => {
      character.setLanguage('de');
      expect(character.abilityScores.strength.displayName).toBe('Stärke');
      expect(character.abilityScores.dexterity.displayName).toBe('Geschicklichkeit');
      expect(character.abilityScores.constitution.displayName).toBe('Konstitution');
      expect(character.abilityScores.intelligence.displayName).toBe('Intelligenz');
      expect(character.abilityScores.wisdom.displayName).toBe('Weisheit');
      expect(character.abilityScores.charisma.displayName).toBe('Charisma');
    });

    // ------------------------------------------------------------ //
    // ----- SKILLS ----------------------------------------------- //
    // ------------------------------------------------------------ //
    
    it('should have a skills property', () => {
      character.setLanguage('en');
      expect(character.skills).toEqual(skills);
    });
    
    it('should have the correct skill names in english', () => {
      character.setLanguage('en');
      expect(character.skills.acrobatics.displayName).toBe('Acrobatics');
      expect(character.skills.animalHandling.displayName).toBe('Animal Handling');
      expect(character.skills.arcana.displayName).toBe('Arcana');
      expect(character.skills.athletics.displayName).toBe('Athletics');
      expect(character.skills.deception.displayName).toBe('Deception');
      expect(character.skills.history.displayName).toBe('History');
      expect(character.skills.insight.displayName).toBe('Insight');
      expect(character.skills.intimidation.displayName).toBe('Intimidation');
      expect(character.skills.investigation.displayName).toBe('Investigation');
      expect(character.skills.medicine.displayName).toBe('Medicine');
      expect(character.skills.nature.displayName).toBe('Nature');
      expect(character.skills.perception.displayName).toBe('Perception');
      expect(character.skills.performance.displayName).toBe('Performance');
      expect(character.skills.persuasion.displayName).toBe('Persuasion');
      expect(character.skills.religion.displayName).toBe('Religion');
      expect(character.skills.sleightOfHand.displayName).toBe('Sleight of Hand');
      expect(character.skills.stealth.displayName).toBe('Stealth');
      expect(character.skills.survival.displayName).toBe('Survival');
    });
    
    it('should have the correct skill names in german', () => {
      character.setLanguage('de');
      expect(character.skills.acrobatics.displayName).toBe('Akrobatik');
      expect(character.skills.animalHandling.displayName).toBe('Mit Tieren umgehen');
      expect(character.skills.arcana.displayName).toBe('Arkane Kunde');
      expect(character.skills.athletics.displayName).toBe('Athletik');
      expect(character.skills.deception.displayName).toBe('Täuschen');
      expect(character.skills.history.displayName).toBe('Geschichte');
      expect(character.skills.insight.displayName).toBe('Motiv erkennen');
      expect(character.skills.intimidation.displayName).toBe('Einschüchtern');
      expect(character.skills.investigation.displayName).toBe('Nachforschung');
      expect(character.skills.medicine.displayName).toBe('Heilkunde');
      expect(character.skills.nature.displayName).toBe('Naturkunde');
      expect(character.skills.perception.displayName).toBe('Wahrnehmung');
      expect(character.skills.performance.displayName).toBe('Auftreten');
      expect(character.skills.persuasion.displayName).toBe('Überzeugen');
      expect(character.skills.religion.displayName).toBe('Religion');
      expect(character.skills.sleightOfHand.displayName).toBe('Fingerfertigkeit');
      expect(character.skills.stealth.displayName).toBe('Heimlichkeit');
      expect(character.skills.survival.displayName).toBe('Überlebenskunst');
    });

    it('should have the correct ability score shortnames in english', () => {
      character.setLanguage('en');
      expect(character.skills.acrobatics.abilityDisplayName).toBe('DEX');
      expect(character.skills.animalHandling.abilityDisplayName).toBe('WIS');
      expect(character.skills.arcana.abilityDisplayName).toBe('INT');
      expect(character.skills.athletics.abilityDisplayName).toBe('STR');
      expect(character.skills.deception.abilityDisplayName).toBe('CHA');
      expect(character.skills.history.abilityDisplayName).toBe('INT');
      expect(character.skills.insight.abilityDisplayName).toBe('WIS');
      expect(character.skills.intimidation.abilityDisplayName).toBe('CHA');
      expect(character.skills.investigation.abilityDisplayName).toBe('INT');
      expect(character.skills.medicine.abilityDisplayName).toBe('WIS');
      expect(character.skills.nature.abilityDisplayName).toBe('INT');
      expect(character.skills.perception.abilityDisplayName).toBe('WIS');
      expect(character.skills.performance.abilityDisplayName).toBe('CHA');
      expect(character.skills.persuasion.abilityDisplayName).toBe('CHA');
      expect(character.skills.religion.abilityDisplayName).toBe('INT');
      expect(character.skills.sleightOfHand.abilityDisplayName).toBe('DEX');
      expect(character.skills.stealth.abilityDisplayName).toBe('DEX');
      expect(character.skills.survival.abilityDisplayName).toBe('WIS');
    });

    it('should have the correct ability score shortnames in german', () => {
      character.setLanguage('de');
      expect(character.skills.acrobatics.abilityDisplayName).toBe('GES');
      expect(character.skills.animalHandling.abilityDisplayName).toBe('WEI');
      expect(character.skills.arcana.abilityDisplayName).toBe('INT');
      expect(character.skills.athletics.abilityDisplayName).toBe('STK');
      expect(character.skills.deception.abilityDisplayName).toBe('CHA');
      expect(character.skills.history.abilityDisplayName).toBe('INT');
      expect(character.skills.insight.abilityDisplayName).toBe('WEI');
      expect(character.skills.intimidation.abilityDisplayName).toBe('CHA');
      expect(character.skills.investigation.abilityDisplayName).toBe('INT');
      expect(character.skills.medicine.abilityDisplayName).toBe('WEI');
      expect(character.skills.nature.abilityDisplayName).toBe('INT');
      expect(character.skills.perception.abilityDisplayName).toBe('WEI');
      expect(character.skills.performance.abilityDisplayName).toBe('CHA');
      expect(character.skills.persuasion.abilityDisplayName).toBe('CHA');
      expect(character.skills.religion.abilityDisplayName).toBe('INT');
      expect(character.skills.sleightOfHand.abilityDisplayName).toBe('GES');
      expect(character.skills.stealth.abilityDisplayName).toBe('GES');
      expect(character.skills.survival.abilityDisplayName).toBe('WEI');
    });

    // ------------------------------------------------------------ //
    // ----- PROFICIENCY BONUS ------------------------------------ //
    // ------------------------------------------------------------ //
    
    it('should have a proficiency bonus property', () => {
        expect(character.proficiencyBonus).toBe(2);
    });

    it('should calculate the correct skill modifiers', () => {
      expect(character.getSkillModifier('acrobatics')).toBe(1);
      expect(character.getSkillModifier('animalHandling')).toBe(2);
      expect(character.getSkillModifier('arcana')).toBe(1);
      expect(character.getSkillModifier('athletics')).toBe(0);
      expect(character.getSkillModifier('deception')).toBe(1);
      expect(character.getSkillModifier('history')).toBe(1);
      expect(character.getSkillModifier('insight')).toBe(2);
      expect(character.getSkillModifier('intimidation')).toBe(1);
      expect(character.getSkillModifier('investigation')).toBe(1);
      expect(character.getSkillModifier('medicine')).toBe(2);
      expect(character.getSkillModifier('nature')).toBe(-1);
      expect(character.getSkillModifier('perception')).toBe(4);
      expect(character.getSkillModifier('performance')).toBe(3);
      expect(character.getSkillModifier('persuasion')).toBe(1);
      expect(character.getSkillModifier('religion')).toBe(-1);
      expect(character.getSkillModifier('sleightOfHand')).toBe(1);
      expect(character.getSkillModifier('stealth')).toBe(3);
      expect(character.getSkillModifier('survival')).toBe(4);
    });
});