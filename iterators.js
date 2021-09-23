// Custom Iterator that iterates a value starting att 8000
let idMaker = {
  [Symbol.iterator]() {
    let nextId = 8000;
    return {
      next() {
        return {
          value: nextId++,
          done: false,
        };
      },
    };
  },
};

let it = idMaker[Symbol.iterator](); // Retrieving the iterator
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

for (let id of idMaker) {
  if (id > 8030) {
    break;
  }
  console.log(id);
}
