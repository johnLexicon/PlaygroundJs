let obj = {};
let obj2 = obj;

/*
Det går att kolla objekt
*/
switch (obj) {
  case obj2:
    console.log('Samma objekt');
    break;
  default:
    console.log('Inte samma objekt');
}

let st = 'kalle';

switch (st) {
  case 'kalle':
    console.log('Namnet är kalle');
    break;
  default:
    console.log('Inte samma sträng');
}
