const calc = function (expression) {
  function safeEval(expression) {
    // This regex matches valid arithmetic expressions including balanced brackets
    const regex =
      /^([-]?\d+(\.\d+)?|([(][-]?\d+(\.\d+)?)+([+\-*/][-]?\d+(\.\d+)?|[+\-*/][(][-]?\d+(\.\d+)?)*([)])?)*$/;

    // Check for balanced brackets
    const isBalancedBrackets = (str) => {
      let stack = [];
      for (let char of str) {
        if (char === "(") {
          stack.push(char);
        } else if (char === ")") {
          if (stack.length === 0 || stack.pop() !== "(") {
            return false;
          }
        }
      }
      return stack.length === 0;
    };

    if (!regex.test(expression) || !isBalancedBrackets(expression)) {
      throw new Error("Invalid expression");
    }

    try {
      // Using the new Function constructor to evaluate the arithmetic expression
      return new Function(`return ${expression}`)();
    } catch (e) {
      throw new Error("Evaluation error");
    }
  }

  return safeEval(expression);
};

console.log(calc("(2+3)*4/2"));
