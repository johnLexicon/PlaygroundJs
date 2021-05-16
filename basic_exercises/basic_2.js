// Get the sum of the values on the even indexes in the array
function e1(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      sum += a[i];
    }
  }
  return sum;
}

// Get the sum of the values on the odd indexes in the array
function e2(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) {
      sum += a[i];
    }
  }
  return sum;
}
