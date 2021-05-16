// Number 6

function e6(arr) {
  for (let v of arr) {
    alert(v);
  }
}

// Number 7

function e7() {
  let again = false;
  do {
    again = confirm('Do you want to see me again?');
  } while (again);
}

// Number 8

function e8(fullName) {
  const names = fullName.split(' ');
  return `${names[1]} ${names[0]}`;
}
