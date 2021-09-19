function whatisThis() {
  console.log(this); /* this points to the global object */
}

const person = {
  name: 'Chago Rodriguez',
  age: 50,
  whatisThis: function () {
    console.log(this); /* this points to the person object */
  },
  whatisThisArrow: () => {
    console.log(this); /* this points to the global object */
  },
};

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
