function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastName = lname;
  this.age = age;
  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (fullName) {
      const names = fullName.split(' ');
      this.firstName = names[0];
      this.lastName = names[1];
    },
  });
}

function Student(fname, lname, age) {
  Person.call(this, fname, lname, age);

  this._enrolledCourses = [];

  this.enroll = function (courseId) {
    this._enrolledCourses.push(courseId);
  };

  this.getCourses = function () {
    return this._enrolledCourses.slice();
  };
}

// This two lines are necessary to create the prototype chain.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let john = new Student('John', 'lundgren', 55);
john.enroll('CS2020');
john.enroll('MA3210');
john.enroll('BI4322');

john.fullName = 'Kalle Anka';
console.log(john.fullName);
console.log(john.__proto__);
console.log(john.__proto__.__proto__);
