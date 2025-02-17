function validParanthesis(brackets) {
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];

  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    if (open.includes(brackets[i])) {
      stack.push(brackets[i]);
    } else {
      const last = stack.pop();
      if (open.indexOf(last) !== close.indexOf(brackets[i])) {
        return false;
      }
    }
  }
}
