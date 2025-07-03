const {createSlug} = require("../function/testMinuscolo")


test('dovrebbe restituire una stringa in lowercase', () => {
  expect(createSlug('Questo È Un Titolo')).toBe('questo è un titolo');
});