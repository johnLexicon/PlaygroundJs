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
