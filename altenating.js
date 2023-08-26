function f(x, values) {
    const { a, b, c } = values;
    const nextValueMap = {
      [a]: b,
      [b]: c,
      [c]: a
    };
    return nextValueMap[x];
  }