function validBraces(braces) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const brace of braces) {
    if (["(", "{", "["].includes(brace)) {
      stack.push(brace);
    } else {
      if (!stack.length || stack[stack.length - 1] !== mapping[brace]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
