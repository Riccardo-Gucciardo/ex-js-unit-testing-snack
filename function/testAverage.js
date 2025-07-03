function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0; // Gestisce array non validi o vuoti, restituendo 0 o un valore sensato per il contesto.
  }

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}

module.exports = {average}