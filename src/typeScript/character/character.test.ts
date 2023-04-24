import { Character } from './character.class';
import { Human } from '../classes/races/human.class'
import { Race as RaceInterface } from '../interfaces/race.interface'
import { AbilityScoreType, AbilityScoreValues } from '../abilities/abilityScores';
import { SkillProficiencies, SkillType } from '../skills/skills';
import { SupportedLanguages } from '../enums/supportedLanguages.enum';

const language: SupportedLanguages = SupportedLanguages.English;

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
    animalHandling: true,
    arcana: false,
    athletics: true,
    deception: true,
    history: true,
    insight: false,
    intimidation: false,
    investigation: true,
    medicine: true,
    nature: false,
    perception: false,
    performance: false,
    persuasion: true,
    religion: false,
    sleightOfHand: false,
    stealth: false,
    survival: true,
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
      character.setLanguage(SupportedLanguages.German)
      expect(character.language).toBe('de');
      character.setLanguage(SupportedLanguages.English)
      expect(character.language).toBe('en');
    });
    
    // ------------------------------------------------------------ //
    // ----- ABILITY SCORES --------------------------------------- //
    // ------------------------------------------------------------ //
  
    it('should have an abilityScores property', () => {
      character.setLanguage(SupportedLanguages.English);
      expect(character.abilityScores).toBeDefined;
    });

    it('should calculate the correct ability score modifiers', () => {
      expect(character.getAbilityScoreModifier(AbilityScoreType.strength)).toBe(0);
      expect(character.getAbilityScoreModifier(AbilityScoreType.dexterity)).toBe(1);
      expect(character.getAbilityScoreModifier(AbilityScoreType.constitution)).toBe(2);
      expect(character.getAbilityScoreModifier(AbilityScoreType.intelligence)).toBe(-1);
      expect(character.getAbilityScoreModifier(AbilityScoreType.wisdom)).toBe(2);
      expect(character.getAbilityScoreModifier(AbilityScoreType.charisma)).toBe(1);
    });

    it('should display the correct ability score names in english', () => {
      character.setLanguage(SupportedLanguages.English);
      expect(character.abilityScores.strength.displayName).toBe('Strength');
      expect(character.abilityScores.dexterity.displayName).toBe('Dexterity');
      expect(character.abilityScores.constitution.displayName).toBe('Constitution');
      expect(character.abilityScores.intelligence.displayName).toBe('Intelligence');
      expect(character.abilityScores.wisdom.displayName).toBe('Wisdom');
      expect(character.abilityScores.charisma.displayName).toBe('Charisma');
    });

    it('should display the correct ability score names in german', () => {
      character.setLanguage(SupportedLanguages.German);
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
      character.setLanguage(SupportedLanguages.English);
      expect(character.skills).toBeDefined();
    });
    
    it('should have the correct skill names in english', () => {
      character.setLanguage(SupportedLanguages.English);
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
      character.setLanguage(SupportedLanguages.German);
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
      character.setLanguage(SupportedLanguages.English);
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
      character.setLanguage(SupportedLanguages.German);
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
      expect(character.getSkillModifier(SkillType.acrobatics)).toBe(1);
      expect(character.getSkillModifier(SkillType.animalHandling)).toBe(4);
      expect(character.getSkillModifier(SkillType.arcana)).toBe(-1);
      expect(character.getSkillModifier(SkillType.athletics)).toBe(2);
      expect(character.getSkillModifier(SkillType.deception)).toBe(3);
      expect(character.getSkillModifier(SkillType.history)).toBe(1);
      expect(character.getSkillModifier(SkillType.insight)).toBe(2);
      expect(character.getSkillModifier(SkillType.intimidation)).toBe(1);
      expect(character.getSkillModifier(SkillType.investigation)).toBe(1);
      expect(character.getSkillModifier(SkillType.medicine)).toBe(4);
      expect(character.getSkillModifier(SkillType.nature)).toBe(-1);
      expect(character.getSkillModifier(SkillType.perception)).toBe(2);
      expect(character.getSkillModifier(SkillType.performance)).toBe(1);
      expect(character.getSkillModifier(SkillType.persuasion)).toBe(3);
      expect(character.getSkillModifier(SkillType.religion)).toBe(-1);
      expect(character.getSkillModifier(SkillType.sleightOfHand)).toBe(1);
      expect(character.getSkillModifier(SkillType.stealth)).toBe(1);
      expect(character.getSkillModifier(SkillType.survival)).toBe(4);
    });
});

describe('Human', () => {
  it('should create a new instance of Human', () => {
    const human = new Human();

    expect(human).toBeInstanceOf(Human);
  });

  it('should have a race interface', () => {
    const human = new Human();

    expect(human.raceInterface).toBeDefined();
  })

  it('should have the correct name', () => {
    const human = new Human();

    expect(human.name).toBe('human');
  })

  it('should have the correct display name', () => {
    const human = new Human();

    expect(human.displayName).toBe('Human');
  })
});