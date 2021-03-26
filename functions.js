function whatisThis() {
  console.log(this);
}

const person = {
  name: 'Chago Rodriguez',
  age: 50,
  whatisThis: function () {
    console.log(this);
  },
  whatisThisArrow: () => {
    console.log(this);
  },
};

// person.whatisThisArrow(); // this = empty obj.
// person.whatisThis(); // this = person obj.

// whatisThis(); // this = global obj.
// new whatisThis(); // this = the function itself.

/*------------------------ call --------------------------*/

let emp1 = {
  name: 'Helan',
  age: 50,
  info: function () {
    console.log(`name: ${this.name}, age: ${this.age}`);
  },
};

let emp2 = {
  name: 'Halvan',
  age: 55,
};

let sayHi = function () {
  console.log(`Hello ${this.name}`);
};

// sayHi.call(emp1);
// sayHi.call(emp2);

/*-----------------------bind------------------------------*/

const infoCopy = emp1.info.bind(emp2); // Uses the function in obj emp1 and binds it with the obj emp2
infoCopy(); // Prints out the emp2 information.
