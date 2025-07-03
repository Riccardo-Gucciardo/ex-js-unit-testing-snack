const {isPalindrome} = require("../function/testIsPalindrome")



test('dovrebbe verificare se una stringa è un palindromo (case-insensitive)', () => {
  // Caso di una stringa palindroma (case-insensitive)
  expect(isPalindrome('Anna')).toBe(true);
  expect(isPalindrome('Racecar')).toBe(true);
  expect(isPalindrome('anna')).toBe(true);

  // Caso di una stringa non palindroma
  expect(isPalindrome('hello')).toBe(false);
});