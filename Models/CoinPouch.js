export class CoinPouch {
    #gold = 0;
    #silver = 0;
    #copper = 0;

    constructor(gold = 0, silver = 0, copper = 0) {
        this.#gold = gold;
        this.#silver = silver;
        this.#copper = copper;
    }

    load(pouchID = 0) {
        if (!pouchID) throw new Error('Invalid pouch ID');
        // Load coin pouch from database
    }

    addGold(amount) {
        this.#gold += amount;
    }

    subtractGold(amount) {
        this.#gold -= amount;
    }

    addSilver(amount) {
        this.#silver += amount;
    }

    subtractSilver(amount) {
        this.#silver -= amount;
    }

    addCopper(amount) {
        this.#copper += amount;
    }

    subtractCopper(amount) {
        this.#copper -= amount;
    }

    getGold() {
        return this.#gold;
    }

    getSilver() {
        return this.#silver;
    }

    getCopper() {
        return this.#copper;
    }

    setGold(amount) {
        this.#gold = amount;
    }

    setSilver(amount) {
        this.#silver = amount;
    }

    setCopper(amount) {
        this.#copper = amount;
    }

    minimizeDenominations() {
        // Convert copper to silver (100 copper = 1 silver)
        const silverFromCopper = Math.floor(this.#copper / 100);
        this.#silver += silverFromCopper;
        this.#copper %= 100;

        // Convert silver to gold (100 silver = 1 gold)
        const goldFromSilver = Math.floor(this.#silver / 100);
        this.#gold += goldFromSilver;
        this.#silver %= 100;
    }
}
