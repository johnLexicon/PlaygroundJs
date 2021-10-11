function evaluateCode(code) {
  const result = eval(code);
  console.log(result);
}

const str = `function test() {
  console.log(3 + 4);
}
test();
`;

evaluateCode(str);
