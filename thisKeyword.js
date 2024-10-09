// The this keyword refers to the owner of the function we are executing

let message = {
  employee: 'Kalle Anka',
  regularFunction: function () {
    console.log(this); // This refers to the message object
    return 'Hello ' + this.employee;
  },
  arrowFunction: () => {
    console.log(this); // This refers to the global object
    return 'Hello ' + this.employee; //undefined (employee not defined in global object).
  }
};

console.log('Regular function:', message.regularFunction());
console.log('Arrow function', message.arrowFunction());
console.log('Global this:', this);

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
  }
};

obj.m();
