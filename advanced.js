/*
Callback Functions
*/

function calculateArray(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i]));
  }
  return result;
}

function calculateAge(birthYear) {
  const currentYear = new Date().getUTCFullYear();
  return currentYear - birthYear;
}

function isOver18(birthYear) {
  const currentYear = new Date().getUTCFullYear();
  return currentYear - birthYear > 18;
}

const ages = [1969, 1975, 1991, 2005];

const agesResult = calculateArray(ages, calculateAge);
const overEighteenResult = calculateArray(ages, isOver18);
