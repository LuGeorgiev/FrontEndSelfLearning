String.prototype.nbsp = function() {
    let len = this.lenght,
        indexSpace = 0,
        startIndex = 0,
        str = [];
    const nbsp = '&nbsp;';
    indexSpace = this.indexOf(' ', indexSpace);
    if (indexSpace === -1) {
        return this;
    }
    while (true) {
        str.push(this.substring(startIndex, indexSpace));
        str.push(nbsp);
        startIndex = indexSpace + 1;
        indexSpace = this.indexOf(' ', startIndex);
        if (indexSpace === -1) {
            str.push(this.substring(startIndex));
            return str.join('');
        }
    }
}

const toModify = 'This text contains 5  spaces!!';
console.log(toModify.nbsp());