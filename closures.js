/*
A closure captures the local variables of a single function invocation and can use those 
variables as private state.
*/

const uniqueInt = (function () {
  let i = 0;
  return function () {
    return i++;
  };
})();

// Example with closure that can be executed multiple times
function counter() {
  let i = 0;
  return {
    increment: function () {
      return i++;
    },
    reset: function () {
      i = 0;
    },
  };
}

//Closure example with getter and setter
function counter2(n = 0) {
  let i = n;
  return {
    get count() {
      return i++;
    },
    set count(m) {
      if (m >= i) {
        i = m;
      } else {
        throw Error('Value cannot be lower than the actual count value');
      }
    },
  };
}
