export class Skill {

    #name;
    #level;
    _maxLevel = 50;

    constructor(profile, level = 0) {
        this.setProfile(profile);
        this.setLevel(level);
    }

    get name() {
        return this.#name;
    }
    get level() {
        return this.#level;
    }

    #incrementLevel() {
        this.#level++;
    }

    #decrementLevel() {
        this.#level--;
    }

    setProfile(profile) {
        this.#name = profile.name;
        this._maxLevel = profile.maxLevel;
    }



    setLevel(level) {
        if (level < 0) throw new Error("Skill level cannot be negative.");
        if (level > this._maxLevel) throw new Error(`Skill level cannot exceed ${this._maxLevel}.`);
        this.#level = level;
    }
}