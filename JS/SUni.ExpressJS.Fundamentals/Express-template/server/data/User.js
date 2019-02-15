const mongoose = require('mongoose');
const encription = require('../utilities/encription');
const REQUIRE_VALIDATION_MESSAGE = '{PATH} is required';

let userSchema = new mongoose.Schema({
    username: { type: String, required: REQUIRE_VALIDATION_MESSAGE, unique: true },
    firstName: { type: String, required: REQUIRE_VALIDATION_MESSAGE },
    lastName: { type: String, required: REQUIRE_VALIDATION_MESSAGE },
    salt: String,
    hashedPass: String,
    roles: [String]
});
userSchema.method({
    authenticate: (password) => {
        if (encription.generateHashedPass(this.salt, password) === this.hashedPass) {
            return true;
        } else {
            return false;
        }
    }
});

let User = mongoose.model('User', userSchema);
module.exports.seedAdminUser = () => {
    User.find({})
        .then((users) => {
            if (users.length > 0) {
                return;
            }
            let salt = encription.generateSalt();
            let hashedPass = encription.generateHashedPass(salt, '1234')
            User.create({
                username: 'Administrator',
                firstName: 'Admin',
                lastName: 'Adminov',
                salt: salt,
                hashedPass: hashedPass,
                roles: ['Admin']
            })
        })
}