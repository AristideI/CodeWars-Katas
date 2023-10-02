String.prototype.camelCase = function () {
  return this.split(" ")
    .filter((elt) => elt)
    .map((elt) => elt[0].toUpperCase() + elt.slice(1))
    .join("");
};
