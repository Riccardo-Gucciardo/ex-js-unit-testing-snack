function getInitials(fullName) {
  const parts = fullName.split(' ');
  let initials = '';

  for (const part of parts) {
    if (part.length > 0) {
      initials += part[0].toUpperCase();
    }
  }

  return initials;
}

module.exports = {getInitials}