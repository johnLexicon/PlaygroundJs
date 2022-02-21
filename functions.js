/*----------------------Named Function expression example*/
const f = function fact(x) {
  if (x <= 1) return 1;
  return x * fact(x - 1);
};

/*----------------------ES5 optional parameter example------------*/

function getProps(obj, arr) {
  arr = arr || [];
  for (prop in obj) {
    arr.push(prop);
  }
  return arr;
}

let props = getProps({ id: '3', name: 'kalle', surname: 'anka' });
console.log(props);

/*----------------------ES6 optional parameter example------------*/

function getProps_2(obj, arr = []) {
  for (prop in obj) {
    arr.push(prop);
  }
  return arr;
}

props = getProps_2({ id: '3', name: 'kalle', surname: 'anka' });
console.log(props);

/*-------------------- rest parameters example ---------------------*/

function maxVal(first = -Infinity, ...rest) {
  let max = first;
  for (val of rest) {
    if (val > max) {
      max = val;
    }
  }
  return max;
}

let max = maxVal(100, 10, 8, 7, 50);
console.log(max);

/*---------------- Destructuring arguments into parameters ------------*/

function vectorAdd([x1, y1], [x2, y2]) {
  return [x1 + x2, y1 + y2];
}

console.log([2, 3], [4, 5]);

function vectorMultiply({ x, y }, scalar) {
  return { x: x * scalar, y: y * scalar }; // Properties in argument must have same name as the ones in destructor
}

console.log(vectorMultiply({ x: 1, y: 2 }, 2));

/*--------------------- this keyword examples ------------*/

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
  }
};

/*------------------------ call --------------------------*/

let emp1 = {
  name: 'Helan',
  age: 50,
  info: function () {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
};

let emp2 = {
  name: 'Halvan',
  age: 55
};

let sayHi = function () {
  console.log(`Hello ${this.name}`);
};

// sayHi.call(emp1);
// sayHi.call(emp2);

/*-----------------------bind------------------------------*/

const infoCopy = emp1.info.bind(emp2); // Uses the function in obj emp1 and binds it with the obj emp2
infoCopy(); // Prints out the emp2 information.

/* ------------------- RangeError: Maximum call stack size exceeded example ------------*/
function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

// console.log(chicken(), 'came first.');
