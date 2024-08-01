function solution(data, replace) {
  //Replace all values of "dynamic" with replace
  if (typeof data[1] !== "object") {
    if (data[1] === "dynamic") {
      data[1] = replace;
      return [data[0], data[1]];
    }
  }

  return Object.fromEntries(
    Object.entries(data).map((elt) => {
      solution(elt, replace);
    })
  );
}

function solution(data, replace) {
  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        data[i] = solution(data[i], replace);
      }
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          data[key] = solution(data[key], replace);
        }
      }
    }
  } else if (data === "dynamic") {
    data = replace;
  }
  return data;
}
