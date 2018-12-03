/*jshint esversion:6*/
const service = (() => {
    let collection = [];

    function add(item) {
        collection.push(item);
    }

    function remove(item) {
        collection = collection.filter((el) => {
            return el !== item;
        });
    }

    function print() {
        console.log(collection.join(", "));
    }
    return {
        add,
        remove,
        print
    };
})();

const input = ['add hello', 'add again', 'remove hello', 'add again', 'print'];

input.forEach((el) => {
    const action = el.split(' ');
    service[action[0]](action[1]);
});