/*
    The var keyword was replaced with the let keyword due to scoping issues. 
*/
function var_vs_let() {
  for (let i = 0; i < 10; i++) {
    //Iterates i ten times
  }
  try {
    //Throws a ReferenceError: i is not defined
    console.log(`let i = ${i}`);
  } catch (error) {
    console.log(error);
  }

  for (var j = 0; j < 10; j++) {
    //Iterates j ten times
  }

  console.log(`var j = ${j}`);
}

/*
Primitive/Value Types:
    String
    Number
    Boolean
    Symbol
    undefined //Its is both a type and a value
    null //In javascript it is used to clear the value of a variable
Reference Types:
    Object
    Array
    Function
*/
function usingTypeof() {
  let value;

  value = 'Kalle';
  console.log(`${value} is a ${typeof value}`);

  value = 1;
  console.log(`${value} is a ${typeof value}`);

  value = 1.5;
  console.log(`${value} is a ${typeof value}`);

  value = {};
  console.log(`${value} is a ${typeof value}`);

  value = [1, 2, 3];
  console.log(`${value} is a ${typeof value}`);

  value = null;
  console.log(`${value} is a ${typeof value}`);

  //undefined is actually a type and a value.
  value = undefined;
  console.log(`${value} is a ${typeof value}`);
}

function objectAccessors() {
  const person = { name: 'Kalle', age: 80 };
  console.log(`Accessing with . notation: ${person.name} ${person.age}`);
  console.log(
    `Accessing with bracket notation: ${person['name']} ${person['age']}`
  );
  //Example of usage:  If you dont know the name of the target property e.g if you want to get the property by the property.
  let propertyName = 'age';
  console.log(
    `Accessing with bracket and variable name: ${person[propertyName]}`
  );
}

/*
An array is an object.
Used to represent a list of items.
Arrays have dynamic length in Javascript.
Arrays can store different types in the same array.
*/
function usingArrays() {
  let listOfItems = [1, 1.3, 2];
  console.log(listOfItems);
  listOfItems[3] = 3.3;
  console.log(listOfItems);
  listOfItems[0] = 'some text';
  console.log(listOfItems);

  console.log('\n');

  //Iterate an array
  for (let i = 0; i < listOfItems.length; i++) {
    console.log(
      `The value in index ${i} is ${
        listOfItems[i]
      } and its type is ${typeof listOfItems[i]}`
    );
  }

  console.log('\n');

  //Another way of iterating
  listOfItems.forEach((element) => console.log(element));
}

/*
Functions can be called with fewer or more arguments then there are parameters.
*/
function functionExample(value) {
  console.log(value);
}

//var_vs_let();
// usingTypeof();
//objectAccessors();
// usingArrays();

// functionExample();
// functionExample("Hello world");
// functionExample("One", "Two");

// let value = functionExample(10);
// console.log(typeof value);

function getCar(brand) {
  let cars = [
    { brand: 'volvo', price: 100_000 },
    { brand: 'saab', price: 200_000 },
    { brand: 'ferrari', price: 1000_000 },
  ];
  for (let car of cars) {
    if (car.brand === brand) {
      return car;
    }
  }
  return null;
}

console.log('Running!!!');
