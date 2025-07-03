const {getInitials} = require("./testiniziali")


  test('dovrebbe restituire le iniziali di un nome con più di due parole', () => {
    expect(getInitials('Anna Maria Bianchi')).toBe('AMB');
  });