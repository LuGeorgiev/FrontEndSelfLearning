/*jshint esversion:6*/
const input = ['append hello', 'append again', 'removeStart 3', 'removeEnd 4', 'print'];

const operations = {
    current: "",
    append: function(str) {
        this.current += str;
        return this;
    },
    removeStart: function(count) {
        this.current = this.current.slice(count);
        return this;
    },
    removeEnd: function(count) {
        this.current = this.current.slice(0, this.current.length - count);
        return this;
    },
    print: function() {
        console.log(this.current);
        return this;
    },
    execute: function(input) {
        input.forEach(element => {
            const parts = element.split(' ');
            this[parts[0]].call(this, parts[1]);
        });
    }
};
//operations.execute.call(operations, input);

operations.append("hello");
operations.append("again");
operations.removeEnd(4);

//OR
operations.append("hello").append("again").removeEnd(4);