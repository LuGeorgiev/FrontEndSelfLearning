class Stringer {
    constructor(innerString, innerLength) {
        this.innerLength = innerLength;
        this.innerString = innerString;
    }
    get innerLength() {
        return this._innerLength;
    }
    set innerLength(val) {
        if (val < 0) {
            this._innerLength = 0;
        }
        this._innerLength = val;
    }

    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this._innerLength -= length;
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            return this.innerString.substring(0, this.innerLength) + '...';
        }
        return this.innerString;
    }
}