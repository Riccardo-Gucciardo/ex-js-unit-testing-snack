function createSlug(title) {
  // Controllo per titolo vuoto o non valido
  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Il titolo non può essere vuoto o non valido.');
  }

  // Sostituisce uno o più spazi con un singolo trattino
  return title
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, ''); // Rimuove trattini all'inizio e alla fine
}

module.exports= {createSlug}