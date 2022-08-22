class Option {
    constructor(description, consequences, next) {
        this._description = description;
        this._consequences = consequences;
        this._next = next;
    }

    description() {
        return this._description;
    }

    consequences() {
        return this._consequences;
    }

    next() {
        return this._next;
    }
}