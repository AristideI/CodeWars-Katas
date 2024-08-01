function firstNonRepeatingLetter(a, s = a.toLowerCase()) {
  if (s === "" || s === " ") return "";
  console.log(s);
  let obj = {};
  s.split("").forEach((elt) => {
    if (obj.hasOwnProperty(elt)) {
      obj[elt]++;
    } else {
      obj[elt] = 1;
    }
  });

  return Object.entries(obj).every(([, a]) => a !== 1)
    ? ""
    : a[s.indexOf(Object.entries(obj).find(([, a]) => a === 1)[0])];
}
