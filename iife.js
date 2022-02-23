/*
IIFE functions can be used as namespaces
*/

const myNamespace = (function (newName) {
  const userName = newName;

  function myFunction() {
    console.log('This is my function');
  }
  function hello() {
    console.log('Hello ' + userName); // The userName variable gets captured by the closure.
  }

  return { hello, myFunction };
})('Alexander');

myNamespace.hello();
myNamespace.myFunction();
console.log(myNamespace.userName); // Does not exist after the iife execution.
console.log(myNamespace);
