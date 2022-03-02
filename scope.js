let value = 2;

{
  let value = 3; // This variable exists only until the end of the block
  console.log(value);
}

console.log(value);

/* Example of lexical scope with nested function */

let scope = 'global';

function checkScope() {
  let scope = 'local';
  function f() {
    return `${scope}`;
  }
  return f;
}

const nestedFunction = checkScope();
/* 
Even if the nested function is called outside the local scope the scope will still be 'local'.
Lexical scoping rule: Functions are executed in the scope they were defined.
*/
console.log(nestedFunction()); // local

/* ------------------ Scope with var and without var or let ----------------*/

{
  var varLocal = 'hej';
}

console.log('varLocal:', varLocal);

function assignInFunction() {
  theVariable = 'Assigned in function';
}

assignInFunction();
console.log(theVariable);

function varFunction() {
  var varInFunction = 'var declared in function';
}

varFunction();

// console.log(varInFunction);
