// The new keyword creates a new empty object and then sets the context of the function into the created object.

function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  this.isAdult = function () {
    return this.age >= 18;
  };
}

let p1 = new Person('Kalle', 'Anka', 18);
let p2 = new Person('Kajsa', 'Anka', 17);

console.log(p1, p1.isAdult());
console.log(p2, p2.isAdult());
