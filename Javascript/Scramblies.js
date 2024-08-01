function scramble(str1, str2) {
  let frequencyCounter = {};
  for (let char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!frequencyCounter[char] || frequencyCounter[char] <= 0) {
      return false;
    }
    frequencyCounter[char]--;
  }

  return true;
}
