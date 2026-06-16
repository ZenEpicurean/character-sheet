export class CharacterSheet {

    #strength;
    #dexterity
    #constitution;
    #intelligence
    #wisdom;
    #charisma;
    currency: {
        gold: number;
        silver: number;
        copper: number;
    }

    constructor(strength = null, dexterity = null, constitution = null, intelligence = null, wisdom = null, charisma = null) {
        this.#strength = strength;
        this.#dexterity = dexterity;
        this.#constitution = constitution;
        this.#intelligence = intelligence;
        this.#wisdom = wisdom;
        this.#charisma = charisma;
    }

    get strength() {
        return this.#strength;
    }
    
    get dexterity() {
        return this.#dexterity;
    }

    get constitution() {
        return this.#constitution;
    }

    get intelligence() {
        return this.#intelligence;
    }

    get wisdom() {
        return this.#wisdom;
    }
    
    get charisma() {
        return this.#charisma;
    }

    set strength(value) {
        this.#strength = value;
    }
    
    set dexterity(value) {
        this.#dexterity = value;
    }

    set constitution(value) {
        this.#constitution = value;
    }

    set intelligence(value) {
        this.#intelligence = value;
    }

    set wisdom(value) {
        this.#wisdom = value;
    }
    
    set charisma(value) {
        this.#charisma = value;
    }

    // Personality traits:
    // Make personality actually affect ability rolls in interactions with NPCs.

    // Audit to ensure character sheet is valid

    // Implement a skill training mechanic with decay due to time spent on other skills. 

    // Inventory

    // Equipped Items and stats

    // Currency

}