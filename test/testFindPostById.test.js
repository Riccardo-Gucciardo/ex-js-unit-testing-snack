const {findPostById} = require("../function/testFindPostById")


const posts = [
  { id: 1, title: 'Post 1', slug: 'post-1' },
  { id: 2, title: 'Post 2', slug: 'post-2' },
  { id: 3, title: 'Post 3', slug: 'post-3' },
];



describe('findPostById - Funzionalità principale', () => {
  test('dovrebbe restituire il post corretto dato l’array e l’ID', () => {
    const expectedPost = { id: 2, title: 'Post 2', slug: 'post-2' };
    expect(findPostById(posts, 2)).toEqual(expectedPost);
  });

  test('dovrebbe restituire undefined se il post non viene trovato', () => {
    expect(findPostById(posts, 99)).toBeUndefined();
  });
});

describe('findPostById - Validazione argomento postsArray', () => {
  test('dovrebbe lanciare un errore se il primo argomento non è un array', () => {
    expect(() => findPostById('non un array', 1)).toThrow('Il primo argomento deve essere un array.');
    expect(() => findPostById(null, 1)).toThrow('Il primo argomento deve essere un array.');
    expect(() => findPostById(undefined, 1)).toThrow('Il primo argomento deve essere un array.');
    expect(() => findPostById({}, 1)).toThrow('Il primo argomento deve essere un array.');
  });
});
