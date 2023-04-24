import { Character } from './character.class';
import { Barbarian } from './races/barbarian.class'
import { Race as RaceInterface } from '../interfaces/race.interface'
import { AbilityScoreValues } from '../interfaces/configuration/abilityScoreValues.interface.configuration';
import { SkillProficiencies } from '../interfaces/configuration/skillProficiencies.interface.configuration';
import { Languages } from '../enums/languages.enum';

const language: Languages = Languages.English;

const abilityScoreValues: AbilityScoreValues = { 
    strength:  10,
    dexterity: 12,
    constitution: 14,
    intelligence: 8 ,
    wisdom: 14,
    charisma: 12,
};
const skillProficiencies: SkillProficiencies = {
    acrobatics: false,
    animalHandling: false,
    arcana: false,
    athletics: false,
    deception: false,
    history: false,
    insight: false,
    intimidation: false,
    investigation: false,
    medicine: false,
    nature: false,
    perception: false,
    performance: false,
    persuasion: false,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: false,
};
const proficiencyBonus = 2;
const character = new Character(language, 'John Doe', abilityScoreValues, skillProficiencies, proficiencyBonus);

describe('Character', () => {
    it('should create a new instance of Character', () => {
      expect(character).toBeInstanceOf(Character);
    });
    
    it('should have a name property', () => {
      expect(character.name).toBe('John Doe');
    });
    
    it('should switch the language', () => {
      character.setLanguage(Languages.German)
      expect(character.language).toBe('de');
      character.setLanguage(Languages.English)
      expect(character.language).toBe('en');
    });
    
    // ------------------------------------------------------------ //
    // ----- ABILITY SCORES --------------------------------------- //
    // ------------------------------------------------------------ //
  
    it('should have an abilityScores property', () => {
      character.setLanguage(Languages.English);
      expect(character.abilityScores).toBeDefined;
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
      character.setLanguage(Languages.English);
      expect(character.abilityScores.strength.displayName).toBe('Strength');
      expect(character.abilityScores.dexterity.displayName).toBe('Dexterity');
      expect(character.abilityScores.constitution.displayName).toBe('Constitution');
      expect(character.abilityScores.intelligence.displayName).toBe('Intelligence');
      expect(character.abilityScores.wisdom.displayName).toBe('Wisdom');
      expect(character.abilityScores.charisma.displayName).toBe('Charisma');
    });

    it('should display the correct ability score names in german', () => {
      character.setLanguage(Languages.German);
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
      character.setLanguage(Languages.English);
      expect(character.skills).toBeDefined();
    });
    
    it('should have the correct skill names in english', () => {
      character.setLanguage(Languages.English);
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
      character.setLanguage(Languages.German);
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
      character.setLanguage(Languages.English);
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
      character.setLanguage(Languages.German);
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

describe('Barbarian', () => {
  it('should create a new instance of Barbarian', () => {
    const raceInterface: RaceInterface = { name: 'barbarian', displayName: 'Barbarian' };
    const barbarian = new Barbarian(raceInterface);

    expect(barbarian).toBeInstanceOf(Barbarian);
  });

  it('should have the correct race interface', () => {
    const raceInterface: RaceInterface = { name: 'barbarian', displayName: 'Barbarian' };
    const barbarian = new Barbarian(raceInterface);

    expect(barbarian.raceInterface).toEqual(raceInterface);
  })

  it('should have the correct name', () => {
    const raceInterface: RaceInterface = { name: 'barbarian', displayName: 'Barbarian' };
    const barbarian = new Barbarian(raceInterface);

    expect(barbarian.name).toBe('barbarian');
  })

  it('should have the correct display name', () => {
    const raceInterface: RaceInterface = { name: 'barbarian', displayName: 'Barbarian' };
    const barbarian = new Barbarian(raceInterface);

    expect(barbarian.displayName).toBe('Barbarian');
  })
});