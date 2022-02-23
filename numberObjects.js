let x = new Number(30);

let y = 30;

console.log(x == y); // True (Implicit coercion before comparison)
console.log(x === y); // False
console.log(Object.is(x, y));
