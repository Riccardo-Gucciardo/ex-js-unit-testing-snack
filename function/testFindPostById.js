function findPostById(postsArray, postId) {
  // Controlli minimi sugli input per evitare errori base
  if (!Array.isArray(postsArray)) {
    throw new Error('Il primo argomento deve essere un array.');
  }
  if (typeof postId !== 'number') {
    throw new Error('Il secondo argomento (ID) deve essere un numero.');
  }

  // Trova il post per ID
  return postsArray.find(post => post.id === postId);
}

module.exports= {findPostById}