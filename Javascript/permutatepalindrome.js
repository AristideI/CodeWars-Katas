function permuteAPalindrome (str) { 
    str = str.replace(/\s+/g, '').toLowerCase();
    
      // Create a character frequency map
      const charCount = new Map();
      for (let char of str) {
        if (charCount.has(char)) {
          charCount.set(char, charCount.get(char) + 1);
        } else {
          charCount.set(char, 1);
        }
      }
    
      // Count the number of characters with odd frequencies
      let oddCount = 0;
      for (let count of charCount.values()) {
        if (count % 2 !== 0) {
          oddCount++;
        }
      }
    
      // If there is more than one character with odd frequency, it's not a palindrome
      return oddCount <= 1;
    }