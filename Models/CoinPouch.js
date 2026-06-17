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
        // Change currency to most efficient form of gold, silver and copper
    }
}
