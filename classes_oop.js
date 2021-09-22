class Animal {
  static #count = 0;
  #name;
  constructor(name) {
    this.#name = name;
    Animal.#count++;
  }
  makeSound() {
    console.log('Generic sound');
  }
  static animalCount() {
    return Animal.#count;
  }
  toString() {
    return `My name is ${this.#name}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log('Voof voof');
  }
  toString() {
    return `${super.toString()} and I'm a dog`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() {
    console.log('Mjauuuuu');
  }
  toString() {
    return `${super.toString()} and I'm a cat`;
  }
}
