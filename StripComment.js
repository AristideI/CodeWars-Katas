function solution(inputi, markers) {
  input = inputi.split("\n");
  markers.forEach((elt) => {
    input.map((elta) => {
      if (elta.includes(elt)) {
        return elta.split(elt)[0];
      } else {
        return elta;
      }
    });
  });

  return input.join("\n");
}

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);
