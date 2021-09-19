function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes generic sound`);
};

function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.speak = function () {
  console.log('vof vof');
};

function Cat(name, age) {
  Animal.call(this, name);
  this.age = age;
}

Cat.prototype = Object.create(Animal.prototype);

let d = new Dog('Fido', 8);

console.log(d);
console.log(d.speak());

let c = new Cat('Felix', 4);
console.log(c);
console.log(c.speak());
