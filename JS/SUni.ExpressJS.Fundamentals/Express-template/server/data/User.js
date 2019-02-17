const mongoose = require('mongoose');
const encription = require('../utilities/encription');
const REQUIRE_VALIDATION_MESSAGE = '{PATH} is required';

let userSchema = new mongoose.Schema({
    username: { type: mongoose.Schema.Types.String, required: REQUIRE_VALIDATION_MESSAGE, unique: true },
    firstName: { type: mongoose.Schema.Types.String, required: REQUIRE_VALIDATION_MESSAGE },
    lastName: { type: mongoose.Schema.Types.String, required: REQUIRE_VALIDATION_MESSAGE },
    salt: { type: mongoose.Schema.Types.String, required: REQUIRE_VALIDATION_MESSAGE },
    hashedPass: { type: mongoose.Schema.Types.String },
    roles: [{ type: mongoose.Schema.Types.String }]
});

userSchema.method({
    authenticate: function(password) {
        if (encription.generateHashedPass(this.salt, password) === this.hashedPass) {
            return true;
        } else {
            return false;
        }
    }
});

let User = mongoose.model('User', userSchema);

User.seedAdminUser = async() => {
    try {

        User.find({})
            .then((users) => {
                if (users.length > 0) {
                    return;
                }
                const salt = encription.generateSalt();
                const hashedPass = encription.generateHashedPass(salt, '4321');
                return User.create({
                    username: 'Administrator',
                    firstName: 'Admin',
                    lastName: 'Adminov',
                    salt: salt,
                    hashedPass: hashedPass,
                    roles: ['Admin']
                });
            });
    } catch (e) {
        console.log(e);
    }
}

module.exports = User;