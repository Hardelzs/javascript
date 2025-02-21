let person = {
    name: 'Alice',
    age: 30,
    valueOf: function() {
        return this.age;
    }
}

let result = person + 10;
console.log(result);
