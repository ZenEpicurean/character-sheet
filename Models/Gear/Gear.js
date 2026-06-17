import { StatModifier } from './StatModifier.js';

export class Gear {
    #name;
    #rarity; // common, uncommon, rare, epic, legendary
    #slot; // head, chest, hands, legs, feet, weapon, offhand, accessory
    #modifiers; // Array of StatModifier objects

    constructor(name, slot, rarity = 'common', modifiers = []) {
        this.#name = name;
        this.#slot = slot;
        this.#rarity = rarity;
        this.#modifiers = modifiers;
    }

    get name() {
        return this.#name;
    }

    get slot() {
        return this.#slot;
    }

    get rarity() {
        return this.#rarity;
    }

    get modifiers() {
        return [...this.#modifiers]; // Return a copy to prevent external modification
    }

    addModifier(statModifier) {
        if (!(statModifier instanceof StatModifier)) {
            throw new Error('Must be a StatModifier instance.');
        }
        this.#modifiers.push(statModifier);
    }

    getModifierForStat(stat) {
        return this.#modifiers.filter(mod => mod.stat === stat);
    }
}
