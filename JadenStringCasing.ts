String.prototype.toJadenCase = function (this : string): string {
    return this.split(" ").map(elt => elt[0].toUpperCase() + elt.slice(1)).join(" ")
    
  }
  
  
  interface String {      // Declaration needed, don't remove it
    toJadenCase(): string;
  }