class VigenèreCipher {
  constructor(key, alphabet) {
    this.key = key;
    this.alphabet = alphabet;
  }

  encode(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (this.alphabet.indexOf(char) !== -1) {
        let charIndex = this.alphabet.indexOf(char);
        let keyIndex = this.alphabet.indexOf(
          this.key.charAt(i % this.key.length)
        );
        result += this.alphabet.charAt(
          (charIndex + keyIndex) % this.alphabet.length
        );
      } else {
        result += char;
      }
    }

    return result;
  }

  decode(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let char = text.charAt(i);
      if (this.alphabet.indexOf(char) !== -1) {
        let charIndex = this.alphabet.indexOf(char);
        let keyIndex = this.alphabet.indexOf(
          this.key.charAt(i % this.key.length)
        );
        result += this.alphabet.charAt(
          (charIndex - keyIndex + this.alphabet.length) % this.alphabet.length
        );
      } else {
        result += char;
      }
    }

    return result;
  }
}
