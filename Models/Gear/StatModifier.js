export class StatModifier {
    #type; // 'flat' or 'percentage'
    #stat; // The stat being modified (e.g., 'strength', 'damage', 'defense')
    #value; // The amount to modify by

    constructor(stat, value, type = 'flat') {
        this.#stat = stat;
        this.#value = value;
        this.#type = type;

        if (type !== 'flat' && type !== 'percentage') {
            throw new Error("Type must be either 'flat' or 'percentage'.");
        }
    }

    get stat() {
        return this.#stat;
    }

    get value() {
        return this.#value;
    }

    get type() {
        return this.#type;
    }

    apply(baseValue) {
        if (this.#type === 'flat') {
            return baseValue + this.#value;
        } else if (this.#type === 'percentage') {
            return baseValue * (1 + this.#value / 100);
        }
    }
}
