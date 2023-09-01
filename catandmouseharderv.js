function catMouse(x, j) {
  if (!x.includes("C") || !x.includes("D") || !x.includes("m")) {
    return "boring without all three";
  }

  const catPos = x.indexOf("C");
  const dogPos = x.indexOf("D");
  const mousePos = x.indexOf("m");

  const distance = Math.abs(catPos - mousePos);

  if (distance <= j) {
    if (
      (catPos < dogPos && dogPos < mousePos) ||
      (mousePos < dogPos && dogPos < catPos)
    ) {
      return "Protected!";
    }
    return "Caught!";
  }

  return "Escaped!";
}
