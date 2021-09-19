/*
IIFE functions can be used as namespaces
*/

const myNamespace = (function (newName) {
  const userName = newName;

  function myFunction() {
    console.log('This is my function');
  }
  function hello() {
    console.log('Hello ' + userName);
  }

  return { hello, myFunction };
})('Alexander');

myNamespace.hello();
myNamespace.myFunction();
