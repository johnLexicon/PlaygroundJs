/*
The four pillars of OOP:
    Encapsulation
    Abstraction
    Inheritance
    Polymorphism
*/

// Encapsulation example with an object literal
let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

// console.log(employee.getWage());

// Factory example
function createEmployee(baseSalary, overtime, rate) {
  return {
    baseSalary,
    overtime,
    rate,
    getWage: function () {
      return this.baseSalary + this.overtime * this.rate;
    },
  };
}

// let emp = createEmployee(10_000, 30, 20);
// console.log(emp.getWage());
// let emp2 = createEmployee(20_000, 30, 30);
// console.log(emp2.getWage());

/* 
    Constructor function
    Using the keyword new makes the keyword this reference to the function object
*/
function Employee(baseSalary, overtime, rate) {
  // console.log('this', this);
  this.baseSalary = baseSalary;
  this.overtime = overtime;
  this.rate = rate;

  this.getWage = () => this.baseSalary + this.overtime * this.rate;
}

/*
let emp = new Employee(10_000, 30, 20); //Using the new keyword makes the Constructor function return the this keyword that references to the created object.
console.log(emp.getWage());
let emp2 = new Employee(20_000, 30, 30);
console.log(emp2.getWage());
Employee(1, 2, 3); //When called without the new keyword the this keyword inside the function will reference to the global scope.
*/

// Iterating properties in an object
// let emp = new Employee(10_000, 30, 20);

// for(let key in emp) {
//     console.log(key, emp[key]);
// }

//Creating Object with Object.create using prototype as first argument.
let personProto = {
  calculateAge: function () {
    const currentYear = new Date().getUTCFullYear();
    return currentYear - this.birthdate;
  },
};

let john = Object.create(personProto, {
  name: { value: "John" },
  birthdate: { value: 1975 },
});

/*
    Data Hiding
    Closure: What members will be accessible to an inner function. Closure will continue in memory after the inner function ends.
    Scope: Exists only until until the function ends.
*/
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; //Private member

  //Property declaration get; set;
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }

      defaultLocation = value;
    },
  });

  //Private member
  let computeOptimumLocation = function (factor) {
    // ...
  };

  this.draw = function () {
    let x, y;

    computeOptimumLocation(0.1);

    console.log("draw");
  };
}

// let c = new Circle(10);
// c.draw();
// console.log(c.defaultLocation);
// c.defaultLocation = {x: 5, y: 10};
// console.log(c.defaultLocation);

/*
  Inheritance
*/

// Base constructor function
function Person(name, yearOfBirth, job) {
  (this.name = name), (this.yearOfBirth = yearOfBirth), (this.job = job);
}

Person.prototype.calculateAge = function () {
  return new Date().getUTCFullYear() - this.yearOfBirth;
};

// Sub constructor function
function Athlete(name, yearOfBirth, job, olympicGames, medals) {
  Person.call(this, name, yearOfBirth, job); // Call to super constructor function
  this.olympicGames = olympicGames;
  this.medals = medals;
}

// Connect the super constructor with the sub constructor
Athlete.prototype = Object.create(Person.prototype);

// Must be declared after connecting the super constructor with the sub constructor.
Athlete.prototype.wonMedal = function () {
  this.medals++;
};
