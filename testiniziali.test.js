const {getInitials} = require("./testiniziali")


test('dovrebbe restituire le iniziali corrette per un nome e cognome', () => {
  expect(getInitials('Mario Rossi')).toBe('MR');
});