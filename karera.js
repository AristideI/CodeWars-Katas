function karera(arr) {
  return arr.map((elt) => {
    if (elt.length === 1) {
      if (
        (elt.charCodeAt(0) > 65 && elt.charCodeAt(0) < 90) ||
        (elt.charCodeAt(0) > 97 && elt.charCodeAt(0) < 122)
      ) {
        return elt;
      } else {
        return pro(elt);
      }
    } else {
      return elt;
    }
  });
}

console.log(karera(["karera", "/", "david", "!", "$", ""]));

function pro(elt) {
  return "\\" + elt;
}
