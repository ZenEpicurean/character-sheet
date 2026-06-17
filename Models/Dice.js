export class Dice {
    #value = 1;
    #showYourWork = false;
    #rollHistory = [];

    roll(sides) {
        this.#value = Math.floor(Math.random() * sides) + 1;
        if (this.#showYourWork) this.#rollHistory.push(`Your d${sides} rolled a ${this.#value}`);
        return this;
    }

    d4() { return this.roll(4); }
    d6() { return this.roll(6); }
    d8() { return this.roll(8); }
    d10() { return this.roll(10); }
    d12() { return this.roll(12); }
    d20() { return this.roll(20); }
    d100() { return this.roll(100); }

    coinToss() {
        const result = Math.floor(Math.random() * 2) + 1;
        this.#value = result === 1; // Heads = true, Tails = false
        if (this.#showYourWork) this.#rollHistory.push(`Your coin tossed and landed on ${this.#value ? 'Heads' : 'Tails'}`);
        return this;
    }

    plus(amt) {
        return this.add(amt);
    }

    add(addAmt) {
        const old = this.#value;
        this.#value += addAmt;
        if (this.#showYourWork) this.#rollHistory.push(`Your dice modified from ${old} to ${this.#value}`);
        this.#validateDie();
        return this;
    }

    subtract(subAmount) {
        const old = this.#value;
        this.#value -= subAmount;
        if (this.#showYourWork) this.#rollHistory.push(`Your dice modified from ${old} to ${this.#value}`);
        this.#validateDie();
        return this;
    }

    #validateDie() {
        if (typeof this.#value === 'number' && this.#value < 1) {
            this.#value = 1;
            if (this.#showYourWork) this.#rollHistory.push('Your dice rolled less than 1 and was set to 1');
        }
    }

    set showYourWork(value) {
        this.#showYourWork = value;
    }

    get value() {
        return this.#value;
    }

    get rollHistory() {
        return this.#rollHistory;
    }
}