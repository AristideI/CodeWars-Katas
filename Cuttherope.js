function cutTheRopes(a) {
  let des = [a.length];
  while (a.every((elt) => elt !== 0)) {
    let sub = Math.min(...a.filter((elt) => elt !== 0));
    console.log("new sub", sub);
    a = a.map((elt) => elt - sub);
    des.push(a.filter((elt) => elt !== 0));
  }

  console.log("A", Math.min(...a));
  return des;
}

console.log(cutTheRopes([3, 3, 2, 9, 7]));
