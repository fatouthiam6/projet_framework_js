class Qcm {
    #id;
    #name;
    #theme;
    #subject;
    #author;
    #nbpoints;
    #questions;

    constructor(qcmToCreate) {
        this.#id = qcmToCreate.id;
        this.#name = qcmToCreate.name;
        this.#theme = qcmToCreate.theme;
        this.#subject = qcmToCreate.subject;
        this.#author = qcmToCreate.author;
        this.#nbpoints = qcmToCreate.nbpoints;
        this.#questions = qcmToCreate.questions || [];
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get theme() {
        return this.#theme;
    }

    get subject() {
        return this.#subject;
    }

    get author() {
        return this.#author;
    }

    get nbpoints() {
        return this.#nbpoints;
    }

    get questions() {
        return this.#questions;
    }

    addQuestion(question) {
        this.#questions.push(question);
    }

    toJSON(key) {
        console.log(key);
        return {
            id: this.#id,
            name: this.#name,
            questions: this.#questions.map(question => question.toJSON())
        };
    }
}

class Question {
    #text;
    #options;
    #correctOption;

    constructor(text, options, correctOption) {
        this.#text = text;
        this.#options = options;
        this.#correctOption = correctOption;
    }

    get text() {
        return this.#text;
    }

    get options() {
        return this.#options;
    }

    get correctOption() {
        return this.#correctOption;
    }

    toJSON() {
        return {
            text: this.#text,
            options: this.#options,
            correctOption: this.#correctOption
        };
    }
}

module.exports = { Qcm, Question };


