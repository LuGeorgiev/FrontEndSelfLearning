/*jshint esversion:6*/
(() => {
    String.prototype.ensureStart = function(str) {
        const curretStr = this.valueOf();
        if (curretStr.indexOf(str) === 0) {
            return curretStr;
        }
        return str + curretStr;
    };

    String.prototype.isEmpty = function() {
        return this.valueOf() === '';
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('Hello ');
console.log(str);
console.log("".isEmpty());