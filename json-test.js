const whatColorAreYou = (age) => {
  let color = undefined;
  if (age >= 0 && age <= 20) {
    color = 'white';
  } else if (age >= 21 && age <= 30) {
    color = 'red';
  } else if (age >= 31 && age <= 40) {
    color = 'blue';
  } else {
    color = 'black';
  }
  return color;
};

// Not possible to stringify functions unless they are first converted to string
const str = JSON.stringify({ f: '' + whatColorAreYou });
console.log(str);
