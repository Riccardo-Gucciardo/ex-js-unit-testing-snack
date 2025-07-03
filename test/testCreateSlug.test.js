const {createSlug} = require("../function/testCreateSlug")



test('dovrebbe sostituire gli spazi con - mantenendo le maiuscole/minuscole', () => {
  expect(createSlug("Questo È Un Test")).toBe("Questo-È-Un-Test");
});