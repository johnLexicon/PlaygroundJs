'use strict';

const person = {
  firstName: 'Diego',
  lastName: 'Maradona',
  age: 60
};

/*---------------- Property Descriptor -------------------*/

// Gets property descriptor (value, writable, enumerable, configurable)
const fNamePropDesc = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(fNamePropDesc);

/*--------------- Define writable property --------------*/

// Change property firstName writable value to false
Object.defineProperty(person, 'firstName', { writable: false });

//person.firstName = 'Olle'; // Unable to change name (TypeError: Cannot assign to read only property)
//console.log(person);

// Set property back to writable
Object.defineProperty(person, 'firstName', { writable: true });

/*----------------- Define enumerable property ------------*/

// Change property lastName to not be shown when enumerated.
Object.defineProperty(person, 'lastName', { enumerable: false });

Object.keys(person).forEach((prop) => console.log(prop));

/*--------------- Define getter and setter ----------------*/

Object.defineProperty(person, 'fullName', {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (value) {
    const names = value.split(' ');
    this.firstName = names[0];
    this.lastName = names[1];
  }
});

console.log(person.fullName);
person.fullName = 'Leo Messi';
console.log(person.fullName);
