/*
  Generators are used by iterators.
  A generator is a function that yields the results
*/

function* process() {
  yield 8000;
  yield 8001;
}

function* idGenerator() {
  let id = 9000;
  while (true) {
    yield id++;
  }
}

function* generatorDelegation() {
  yield* [5, 10, 15, 20];
}
