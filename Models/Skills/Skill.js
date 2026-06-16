export class Skill {

    #name;
    #level;

    constructor(profile, level = 0) {

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
        this.#skillProfile = profile;
    }



    setLevel(level) {
        if (level < 0) throw new Error("Skill level cannot be negative.");
        if (level > 20) throw new Error("Skill level cannot exceed 20.");
        this.#level = level;
    }
}