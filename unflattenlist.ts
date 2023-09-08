function unflatten(flatArray: number[]): number[] {
  const retArr: any[] = [];
  for (let i = 0; i < flatArray.length; i++) {
    if (flatArray[i] < 3) {
      retArr.push(flatArray[i]);
    } else {
      retArr.push(flatArray.slice(i, i + flatArray[i]));
    }
  }

  return retArr;
}

console.log(unflatten([1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3]));
