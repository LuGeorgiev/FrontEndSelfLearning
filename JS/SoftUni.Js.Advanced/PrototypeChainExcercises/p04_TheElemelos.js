function melons() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly!");
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this._elementIndex = this.weight * this.melonSort.length;
            this.element = "";
        }
        get elementIndex() {
            return this._elementIndex;
        }
        toString() {
            return `Element: ${this.element}\n 
                Sort: ${this._elementIndex.melonSort} \n 
                Element Index: ${this._elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Air";
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Fire";
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Earth";
        }
    }

    class Melolemonelon extends Firemelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = "Water";
            this.elements = ["Fire", "Earth", "Air", "Water"];
            this.eIndex = 0;
        }
        morph() {
            this.element = this.elements[this.eIndex++ % 4];
        }
    }

    return {
        Melon,
        Earthmelon,
        Airmelon,
        Firemelon,
        Watermelon,
        Melolemonelon
    }
}