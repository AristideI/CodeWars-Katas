function permutations(s) {
  if (s.length === 1) return [s];

  const perms = new Set();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const remainingStr = s.slice(0, i) + s.slice(i + 1, s.length);

    for (const perm of permutations(remainingStr)) {
      perms.add(char + perm);
    }
  }

  return [...perms];
}
