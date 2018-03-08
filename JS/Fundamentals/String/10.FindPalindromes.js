const text = `Ivane BOB borr ABBa lamal seek seed deed ne stava exe`
words = text.toLowerCase().split(' ');

Array.prototype.printPalindromes = function() {
    for (const word of this) {
        let isPalindrom = true;
        for (let i = 0; i < word.length / 2 | 0; i += 1) {
            if (word[i] !== word[word.length - 1 - i]) {
                isPalindrom = false;
                break;
            }
        }
        if (isPalindrom) {
            console.log(word);
        }
    }
}

words.printPalindromes();