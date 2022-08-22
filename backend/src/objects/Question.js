class Question {
    constructor(id, question, options, duration) {
        this._id = id;
        this._question = question;
        this._options = options;
        this._duration = duration;
    }

    id() {
        return this._id;
    }

    question() {
        return this._question;
    }

    options() {
        return this._options;
    }

    duration() {
        return this._duration;
    }
}