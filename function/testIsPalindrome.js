function isPalindrome(inputString) {
  if (typeof inputString !== 'string') {
    return false; // Una non-stringa non può essere un palindromo.
  }

  // 1. Converte la stringa in minuscolo per una comparazione case-insensitive
  const processedString = inputString.toLowerCase();

  // 2. Inverte la stringa processata
  const reversedString = processedString.split('').reverse().join('');

  // 3. Confronta la stringa originale processata con quella invertita
  return processedString === reversedString;
}

module.exports= {isPalindrome}