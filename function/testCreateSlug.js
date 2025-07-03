function createSlug(inputString) {
  if (typeof inputString !== 'string') {
    return ''; // Gestisce input non stringa
  }
  return inputString
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports= {createSlug}