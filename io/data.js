class Data {
    constructor(input) {
        this.data = input;
    }

    getString() {
        var ss = this.data.match(/.*/)[0];
        this.data = this.data.slice(ss.length + 1);
        return ss;
    }

    getNumbers() {
        return this.getString().split(' ').map(Number);
    }

    getNumber() {
        return +this.getString();
    }
}