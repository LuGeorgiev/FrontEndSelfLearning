class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.creditCard = {
            cardNumber: 1111,
            expirationDate: '',
            securityNumber: 111
        };

        this.idNumber = this.generateIDNumber();

        if (creditCard !== undefined) {

            this.addCreditCardInfo(creditCard)
        }

        this.wishList = [];
    }
    get fullName() {
        return this._fullName;
    }
    set fullName(val) {
        if (val.length !== 3) {
            throw new Error('Name must include first name, middle name and last name')
        }
        const firstName = val[0];
        const secondName = val[1];
        const thirdName = val[2];
        if (!isNameValid(firstName) ||
            !isNameValid(secondName) ||
            !isNameValid(thirdName)) {

            throw new Error('Invalid full name');
        }
        this._fullName = {
            firstName: firstName,
            middleName: secondName,
            lastName: thirdName
        };

        function isNameValid(name) {
            const pattern = /^[A-Z]{1}[a-z]+$/;
            if (pattern.test(name)) {
                return true;
            }
            return false;
        }
    }
    generateIDNumber() {
        const firstLettrCode = this.fullName.firstName.charCodeAt(0);
        const midNameCode = this.fullName.middleName.length;
        const lastNameEnds = this.fullName.lastName[this.fullName.lastName.length - 1];
        let lastNameCode;
        if (lastNameEnds === 'a' || lastNameEnds === 'u' || lastNameEnds === 'e' ||
            lastNameEnds === '0' || lastNameEnds === 'i') {
            lastNameCode = '8';
        } else {
            lastNameCode = '7';
        }

        return 231 * firstLettrCode + 139 * midNameCode + lastNameCode;
    }

    addCreditCardInfo(creditCard) {
        if (creditCard.length !== 3) {
            throw new Error('Missing credit card information');
        }
        if (typeof creditCard[0] !== 'number' || typeof creditCard[2] !== 'number') {
            throw new Error('Invalid credit card details');
        }
        this.creditCard.cardNumber = creditCard[0];
        this.creditCard.expirationDate = creditCard[1];
        this.creditCard.securityNumber = creditCard[2];
    }

    addDestinationToWishList(input) {
        if (this.wishList.indexOf(input) >= 0) {
            throw new Error('Destination already exists in wishlist');
        }
        this.wishList.push(input);
        this.wishList = this.wishList.sort((a, b) => {
            return a.length - b.length;
        });
    }
    getVacationerInfo() {
        return `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n${this.wishList.length===0 ? 'empty' : this.wishList.join(', ')}\nCredit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;
    }
}

// const pesho = new Vacationer(['Petar', 'Petrov', 'Ivanov'], [123456789, "10/01/2018", 777]);
// pesho.addDestinationToWishList('Itay')
// pesho.addDestinationToWishList('If')
// pesho.addDestinationToWishList('Bulgaria')
// console.log(pesho.getVacationerInfo());

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "ZhiVkova"]);
} catch (err) {
    console.log("Error: " + err.message);
}

// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());