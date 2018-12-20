class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get clientId() {
        return this._clientId;
    }
    set clientId(val) {
        if (!/^\d{6}$/.test(val)) {
            throw new TypeError('Client Id must be a 6-digit number')
        }
        this._clientId = val;
    }

    get email() {
        return this._email;
    }
    set email(val) {
        if (!/^[a-zA-Z0-9]+@[a-z.]+$/.test(val)) {
            throw new TypeError("Invalid e-mail");
        }
        this._email = val;
    }

    get firstName() {
        return this._firstName;
    }
    set firstName(val) {
        if (val.length < 3 || val.length > 20) {
            throw new TypeError("First name must be between 3 and 20 symbols");
        }
        if (!/^[a-zA-Z]{3,20}$/) {
            throw new TypeError('First name must contain only Latin characketrs');
        }
        this._firstName = val;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(val) {
        if (val.length < 3 || val.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 symbols");
        }
        if (!/^[a-zA-Z]{3,20}$/) {
            throw new TypeError('Last name must contain only Latin characketrs');
        }
        this._lastName = val;
    }
}