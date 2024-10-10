/* Destructuring */

// The destructuring part is the left side of the equal sign.

const [firstName, age] = ["John", 10]; // Destructuring array

const [first, second, , fourth] = [10, 20, 30, 40]; // Destructuring array skipping the third value.

const [primero, ...resto] = [10, 20, 30, 40];

console.log(primero, resto);


// Destructuring some properties of the Math obj

const {PI, SQRT2, E} = Math;

console.log("PI:", PI, "SQRT2:", SQRT2, "E:", E);


// Destructuring object

let car = {
  regNr: "ABC123",
  brand: "Toyota",
  model: "Corolla",
};

let { regNr, model } = car;


// Destructuring object and choosing variable names

let { regNr: id, brand: brnd } = car;

// Destructuring object with a rest of properties example.

const player = {
  fname: "Diego",
  lName: "Maradona",
  number: 10,
  length: 1.65
}

const {fname, ...props} = player;

console.log(fname, props);



// Using destructuring on function return value

const getViewPortSize = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return [vw, vh];
};

// let [viewPortWidth, viewPortHeight] = getViewPortSize();

// Function arguments as destructors

const circle = {
  label: "red circle",
  radius: 2,
  // precision: 5
}

const calculateArea = ({radius, precision = 2}) => (PI * radius * radius).toFixed(precision);

console.log("Circle Area:", calculateArea(circle));


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

console.log(rockMembers);
