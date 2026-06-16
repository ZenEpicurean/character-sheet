import {CoinPouch} from "./CoinPouch.js";

export class CharacterSheet {

    #strength;
    #dexterity
    #constitution;
    #intelligence
    #wisdom;
    #charisma;
    #currency;
    #skills;
    #name;
    #alignment;
    #race;

    constructor(name, strength = null, dexterity = null, constitution = null, intelligence = null, wisdom = null, charisma = null) {
        this.#name = name;
        this.#strength = strength;
        this.#dexterity = dexterity;
        this.#constitution = constitution;
        this.#intelligence = intelligence;
        this.#wisdom = wisdom;
        this.#charisma = charisma;
        this.#currency = new CoinPouch();
        this.#skills = {};
    }

    load(sheetID = 0) {
        if (!sheetID) throw new Error(
            "CharacterSheet.loadByID: No sheet ID provided."
        )
        // Load character sheet from database
    }

    // Getters and setters
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

    get currencyGold() {
        return this.#currency.gold;
    }

    set currencyGold(value) {
        this.#currency.gold = value;
    }

    get currencySilver() {
        return this.#currency.silver;
    }

    set currencySilver(value) {
        this.#currency.silver = value;
    }

    get currencyCopper() {
        return this.#currency.copper;
    }

    set currencyCopper(value) {
        this.#currency.copper = value;
    }

    getCurrencies() {
        return this.#currency;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get alignment() {
        return this.#alignment;
    }

    set alignment(value) {
        this.#alignment = value;
    }

    get race() {
        return this.#race;
    }

    set race(value) {
        this.#race = value;
    }






    // Personality traits:
    // Make personality actually affect ability rolls in interactions with NPCs.

    // Audit to ensure character sheet is valid

    // Implement a skill training mechanic with decay due to time spent on other skills. 

    // Inventory

    // Equipped Items and stats

    // Currency

}