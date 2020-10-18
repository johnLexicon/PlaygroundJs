/* Destructuring */

// The destructuring part is the left side of the equal sign.

let [name, age] = ["John", 10]; // Destructuring array

// Destructuring object

let car = {
  regNr: "ABC123",
  brand: "Toyota",
  model: "Corolla",
};

let { regNr, model } = car;

// Destructuring object and choosing variable names

let { regNr: id, brand: brnd } = car;

// Using destructuring on function return value

const getViewPortSize = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return [vw, vh];
};

let [viewPortWidth, viewPortHeight] = getViewPortSize();

/*
Spread Operator
*/

function calculateTotal(a, b, c, d) {
  return a + b + c + d;
}

const values = [10, 20, 5, 1];
// Spreads the arguments into parameters
const totalE6 = calculateTotal(...values);
console.log(totalE6);

const [gnr, motley] = [
  ["Axl", "Slash", "Duff", "Matt", "Gilby"],
  ["Vince", "Tommy", "Mic"],
];

// Concatenating arrays with the Spread operator.
const rockMembers = [...gnr, ...motley, "Meat Loaf"];
