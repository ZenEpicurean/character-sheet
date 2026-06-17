export default class Profile {
    #name;
    #catalog; // Map of itemID -> item details

    constructor(name, catalog = {}) {
        this.#name = name;
        this.#catalog = catalog;
    }

    get name() {
        return this.#name;
    }

    get catalog() {
        return this.#catalog;
    }

    craft(itemID) {
        if (!this.#catalog[itemID]) {
            throw new Error(`Item "${itemID}" not found in ${this.#name} catalog.`);
        }
        return this.#catalog[itemID];
    }

    getAvailableItems() {
        return Object.keys(this.#catalog);
    }
}
