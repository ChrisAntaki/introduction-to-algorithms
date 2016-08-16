function Anagrams() {
    this.dictionary = {};

    // Bindings
    this.addWord = this.addWord.bind(this);
    this.addWords = this.addWords.bind(this);
    this.query = this.query.bind(this);
    this.sortWord = this.sortWord.bind(this);
}

Anagrams.prototype.addWord = function(word) {
    var sortedWord = this.sortWord(word);

    if (!this.dictionary[sortedWord]) {
        this.dictionary[sortedWord] = {};
    }

    this.dictionary[sortedWord][word] = true;
};

Anagrams.prototype.addWords = function(words) {
    words.forEach(this.addWord);
};

Anagrams.prototype.query = function(word) {
    var sortedWord = this.sortWord(word);

    if (!this.dictionary[sortedWord]) {
        return false;
    }

    return Object.keys(this.dictionary[sortedWord]);
};

Anagrams.prototype.sortWord = function(word) {
    return word.split('').sort().join('');
};

var anagrams = new Anagrams();
anagrams.addWords(['dog', 'god']);
var res = anagrams.query('gdo');
console.log(res);
