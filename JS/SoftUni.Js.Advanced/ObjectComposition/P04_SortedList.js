/*jshint esversion:6*/
function getSorted() {
    return {
        list: [],
        size: 0,
        add: function(element) {
            this.list.push(element);
            this.size++;
            this.sort();
        },
        remove: function(index) {
            if (index >= 0 || index <= this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function(index) {
            if (index >= 0 || index <= this.list.length) {
                return this.list[index];
            }
        },
        sort: function() {
            this.list.sort((a, b) => a - b);
        }
    };
}

let sorted = getSorted();
sorted.add(15);
sorted.add(-20);
sorted.add(56);
sorted.add(3.3);
sorted.add(59);
sorted.add(5);
console.log(sorted.list);
console.log(sorted.size);
sorted.remove(4);
console.log(sorted.list);
console.log(sorted.get(2));