const {average} = require("../function/testAverage")

test('dovrebbe calcolare la media aritmetica di un array di numeri', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(average(numbers)).toBe(3); // (1+2+3+4+5)/5 = 15/5 = 3
});