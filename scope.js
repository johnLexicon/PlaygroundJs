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
