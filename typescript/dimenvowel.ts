export class Kata {
    static disemvowel(str: string): string {
      let vowels: string[] = ["a", "e", "i", "u", "o", "A", "I", "O", "E", "U"];
      let retArr: string[] = [];
  
      str.split(" ").forEach(elt => {
        let cons: string[] = [];
        elt.split("").forEach(elts => {
          if (!vowels.includes(elts)) {
            cons.push(elts);
          }
        });
        retArr.push(cons.join(""));
      });
  
      return retArr.join(" ");
    }
  }