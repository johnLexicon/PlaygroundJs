/*------------Example with nested function ---------- */

let obj = {
  m: function () {
    const self = this; // ES5 way to be able to get to this in nested function

    /* In method this points to the object obj */
    console.log(this === obj); //true
    f();
    f.bind(this)(); // A way to bind this in the nested function
    function f() {
      /* In nested function this points to the global object */
      console.log(this === obj); //false. true calling with f.bind(this)()
      console.log(self === obj); // true
    }
    const af = () => {
      /* In nested arrow function this points to obj */
      console.log(this === obj); // true
    };
    af();
  },
};

obj.m();
