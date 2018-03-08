String.prototype.padLeft = function(count, char) {
    char = char || '';
    const len = this.length;
    const toAddCount = count - len;
    if (toAddCount <= 0) {
        return this;
    }
    return ''.concat(...(new Array(toAddCount)).fill(char), this) // for radRight change THIS place in teh begining
};
console.log('500'.padLeft(7, '0'));