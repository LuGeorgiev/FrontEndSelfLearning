const mongoose = require('mongoose');
const connection = 'mogodb://localhost:27017/unidb';
mongoose.connect(connection);

let Student = mongoose.model('Student', {
    firstName: { type: String, require: true, minlength: 10 },
    lastName: { type: String, require: true },
    facNumber: { type: Number, require: true, unique: true },
    age: { type: Number }
});

mongoose.connect(connection)
    .then(() => {
        let firstStudent = new Student({ firstName: 'Ivan', lastName: 'Ivanov', facNumber: 90128 })

        firstStudent.save()
            .then(student => {
                console.log(student)
            })
            .catch(err => {
                console.log(err)
            })
    })