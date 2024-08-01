function encryptor(key, message) {
    // Normalize the key to be within the range of -25 to 25
    key = key % 26;
  
    // Function to shift a single letter by the given key
    function shiftLetter(letter, shift) {
      const charCode = letter.charCodeAt(0);
      let shiftedCharCode;
  
      if (letter >= 'A' && letter <= 'Z') {
        shiftedCharCode = ((charCode - 65 + shift + 26) % 26) + 65;
      } else if (letter >= 'a' && letter <= 'z') {
        shiftedCharCode = ((charCode - 97 + shift + 26) % 26) + 97;
      } else {
        // Not a letter, return the character as is
        return letter;
      }
  
      return String.fromCharCode(shiftedCharCode);
    }
  
    // Encrypt the message character by character
    const encryptedMessage = message.split('').map(letter => shiftLetter(letter, key)).join('');
    return encryptedMessage;
  }