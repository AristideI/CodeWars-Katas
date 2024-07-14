export const productFib = (prod: number): [number, number, boolean] => {
  let mul: [number, number, boolean] = [1, 1, false];
  let arr: number[] = [1, 1];
  while (arr[arr.length - 1] <= prod / 2) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] * arr[ind + 1] === prod) {
      mul = [arr[ind], arr[ind + 1], true];
      break;
    } else if (arr[ind] * arr[ind + 1] > prod) {
      mul = [arr[ind], arr[ind + 1], false];
      break;
    }
  }

  return mul;
};

console.log(productFib(5895));

function changeToBase64(file: File) {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    console.log(reader.result);
  };
}


