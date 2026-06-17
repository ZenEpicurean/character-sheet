import { Gear } from './Gear.js';

export class GearSlot {
    #slotName; // head, chest, hands, legs, feet, weapon, offhand, accessory
    #equippedGear; // The Gear object currently in this slot, or null

    constructor(slotName) {
        const validSlots = ['head', 'chest', 'hands', 'legs', 'feet', 'weapon', 'offhand', 'accessory'];
        
        if (!validSlots.includes(slotName)) {
            throw new Error(`Invalid slot: "${slotName}". Valid slots are: ${validSlots.join(', ')}`);
        }

        this.#slotName = slotName;
        this.#equippedGear = null;
    }

    get slotName() {
        return this.#slotName;
    }

    get equippedGear() {
        return this.#equippedGear;
    }

    equip(gear) {
        if (!(gear instanceof Gear)) {
            throw new Error('Must be a Gear instance.');
        }

        if (gear.slot !== this.#slotName) {
            throw new Error(`Cannot equip ${gear.name} in ${this.#slotName} slot. It belongs in ${gear.slot} slot.`);
        }

        this.#equippedGear = gear;
    }

    unequip() {
        this.#equippedGear = null;
    }

    isEmpty() {
        return this.#equippedGear === null;
    }
}
