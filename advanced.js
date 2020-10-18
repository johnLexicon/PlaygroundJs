/*
Callback Functions
*/

function calculateArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function calculateAge(birthYear) {
  const currentYear = new Date().getUTCFullYear();
  return currentYear - birthYear;
}

function isOver18(birthYear) {
  const currentYear = new Date().getUTCFullYear();
  return currentYear - birthYear > 18;
}

const ages = [1969, 1975, 1991, 2005];

const agesResult = calculateArray(ages, calculateAge);
const overEighteenResult = calculateArray(ages, isOver18);

/*
Closure
*/

function interviewQuestions(job) {
  //Closure makes the inner function keep the value of the "job" parameter even after
  //the outer function has been terminated.
  return function (name) {
    if (job === "designer") {
      console.log(name + " can you please explaing what UX-design is?");
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestions("homeless")("John");

/*
Call method
*/

let john2 = {
  name: "John",
  age: 20,
  presentation: function () {
    console.log(`Hi I'm ${this.name} and I'm ${this.age} years old.`);
  },
};

let gosia2 = {
  name: "gosia",
  age: 19,
};

john2.presentation();
//Borrowing john's method by sending gosia.
john2.presentation.call(gosia2);

/*
Apply method
Works like the method call but you can send the arguments as an array.
*/

function calculateTotal(a, b, c, d) {
  return a + b + c + d;
}

const total = calculateTotal.apply(null, [10, 20, 5, 1]);
console.log(total);
