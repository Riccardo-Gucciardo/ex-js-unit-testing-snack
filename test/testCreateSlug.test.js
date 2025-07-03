const {createSlug} = require("../function/testCreateSlug")



test('dovrebbe sostituire gli spazi con - mantenendo le maiuscole/minuscole', () => {
  expect(createSlug("Questo È Un Test")).toBe("Questo-È-Un-Test");
});

test('dovrebbe lanciare un errore se il titolo è vuoto o non valido', () => {
  // Test per stringa vuota
  expect(() => createSlug('')).toThrow('Il titolo non può essere vuoto o non valido.');
  
  // Test per stringa composta solo da spazi
  expect(() => createSlug('   ')).toThrow('Il titolo non può essere vuoto o non valido.');

  // Test per input nullo
  expect(() => createSlug(null)).toThrow('Il titolo non può essere vuoto o non valido.');

});