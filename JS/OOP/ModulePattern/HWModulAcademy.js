function solve() {
    var Course = {
        init: function(title, presentations) {
            var presentation,
                homeworkId = 0,
                self = this;

            //title chck
            if (!title.length) {
                throw new Error("Fill title please");
            }
            if (/^\s|\S$|\s{2,}/.test(title)) {
                throw new Error('One or two spaces at beggining or start are not allowed');
            }
            //presentation check
            if (presentations == undefined || !presentations.length) {
                throw new Error('A Silnle presentation will be apreciated!')
            }
            presentations.forEach(function(title) {
                if (/^\s|\S$|\s{2,}/.test(title) || title.length < 1) {
                    throw new Error('Invalid presentation name');
                }
            });

            //init Method
            this.title = title;
            this.students = [];
            this.presentations = [];

            presentations.forEach(function(title) {
                presentation = {
                    title: title,
                    id: ++homeworkId
                };
                this.presentations.push(presentation);
            });
            return this;
        },

        addStudent: function(name) {
            var firstName,
                lastName,
                student,
                self = this;

            //name verification
            if (typeof name != 'string') {
                throw new Error('Student\'s name have to be a string');
            }
            if (/^[A-z][a-z]*\s([A-Z]{1}[a-z]*)$/.test(name)) {
                throw new Error('Student\'s name has invalid symbols!');
            }
            firstName = name.split(' ')[0];
            lastName = name.split(' ')[1];

            student = {
                firstname: firstName,
                lastname: lastName,
                score: 0,
                id: this.students.length + 1
            };

            this.students, push(student);
            return student.id;
        },

        getAllStudents: function() {
            return this.students.slice(0);
        },

        submitHomework: function(studentID, homeworkID) {
            function validateId(id, objects, type) {
                var hasValidId = false;
                objects.foreach(function(obj) {
                    if (obj.id === id) {
                        hasValidId = true;
                        return;
                    }
                });
                if (!hasValidId) {
                    throw new Error('Invalid' + type + 'id');
                }
            }
            validateId(homeworkID, this.presentations, 'homework');
            validateId(studentID, this.students, 'student');

            this.student.forEach(function(student) {
                if (student.id === studentID) {
                    if (student.homeworks === undefined) {
                        student.homeworks = 1;
                    } else {
                        student.homeworks += 1;
                    }

                }
            });

            return this;
        },

        pushExamResults: function(results) {

            results.forEach(function(studentWithScore) {
                var studentId = studentWithScore.StudentID,
                    score = studentWithScore.Score;
                //check score
                if (isNaN(score) || score === '') {
                    throw new Error('Invalid Id');
                }
                if (this.students[studentId - 1].visitExam === true) {
                    throw new Error('Cheater :)');
                }
                this.students[studentId - 1].visitExam = true;
                this.students[studentId - 1].score = score;
            });
            return this;
        },

        getTopStudents: function() {
            var topStudents;
            this.students.forEach(function(student) {
                student.totalScore = (0.75 * student.score) + (25 * (student.homeworks / this.presentations.length));
            });
            this.students.sort(function(x, y) {
                return x.totalScore - y.totalScore;
            });
            topStudents = this.students.slice(0, 10);

            return topStudents;
        }
    };

    return Course;
}