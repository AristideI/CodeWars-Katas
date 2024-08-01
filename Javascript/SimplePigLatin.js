const pigIt = (a) =>  {
    return a.split(" ").map(elt => {
      if(elt.length > 1) {
        return elt.slice(1) + elt[0] + "ay";
      } 
      else if (elt.length === 1 && 
        ((elt.charCodeAt(0) >= 65 && elt.charCodeAt(0) <= 90) || 
        (elt.charCodeAt(0) >= 97 && elt.charCodeAt(0) <= 122))) {
        return elt + "ay";
      }
      return elt;
    }).join(" ");
  }