class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }
}

let a = new Animal('Fido');
console.log(a.name);
a.name = 'Rambo';
console.log(a.name);
console.log(a);

// Inheritance Example

class Person {
  constructor(name){
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }

  greet() {
    super.greet();
    console.log(`I am in ${this.level}`)
  }
}

const o1 = new Person("John L");
o1.greet();
const o2 = new Student("Gosia T", "Level 1");
o2.greet();

const o3 = new Person("Krolicka");
o3.greet = () => { console.log("I am special!!!") }
o3.greet();
