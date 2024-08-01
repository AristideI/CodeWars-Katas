function pattern(n) {
  let output = [1];
  for (let i = 1; i < n; i++) {
    output.push(`1${"*".repeat(i)}${i + 1}`);
  }
  return output.join("\n");
}
