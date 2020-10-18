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
