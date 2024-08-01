// export const mix = (s1: string, s2: string): string => {
//   const obj1: { [one: string]: number } = {};
//   const obj2: { [one: string]: number } = {};

//   s1.split("").forEach((elt) => {
//     if (obj1.hasOwnProperty(elt)) {
//       obj1[elt]++;
//     } else {
//       obj1[elt] = 1;
//     }
//   });

//   s2.split("").forEach((elt) => {
//     if (obj2.hasOwnProperty(elt)) {
//       obj2[elt]++;
//     } else {
//       obj2[elt] = 1;
//     }
//   });

//   const common: string[] = [
//     ...new Set(
//       [...Object.keys(obj1), ...Object.keys(obj2)].filter(
//         (elt) => elt !== " " && (obj1[elt] > 1 || obj2[elt] > 1)
//       )
//     ),
//   ];

//   return common
//     .map((elt) => {
//       if (obj1[elt] > obj2[elt]) {
//         return `1:${elt.repeat(obj1[elt])}`;
//       } else if (obj2[elt] > obj1[elt]) {
//         return `2:${elt.repeat(obj2[elt])}`;
//       } else if (obj2[elt] === obj1[elt]) {
//         return `=:${elt.repeat(obj1[elt])}`;
//       } else if (obj1.hasOwnProperty(elt) && !obj2.hasOwnProperty(elt)) {
//         return `1:${elt.repeat(obj1[elt])}`;
//       } else {
//         return `2:${elt.repeat(obj2[elt])}`;
//       }
//     })
//     .join("/");
// };

export const mix = (s1: string, s2: string): string => {
  const obj1: { [one: string]: number } = {};
  const obj2: { [one: string]: number } = {};

  s1.split("").forEach((elt) => {
    if (obj1.hasOwnProperty(elt)) {
      obj1[elt]++;
    } else {
      obj1[elt] = 1;
    }
  });

  s2.split("").forEach((elt) => {
    if (obj2.hasOwnProperty(elt)) {
      obj2[elt]++;
    } else {
      obj2[elt] = 1;
    }
  });

  const common: string[] = [
    ...new Set(
      [...Object.keys(obj1), ...Object.keys(obj2)].filter(
        (elt) =>
          elt !== " " &&
          "abcdefghijklmnopqrstuvwxyz".includes(elt) &&
          (obj1[elt] > 1 || obj2[elt] > 1)
      )
    ),
  ];

  const substrings: string[] = common.map((elt) => {
    if (obj1[elt] > obj2[elt]) {
      return `1:${elt.repeat(obj1[elt])}`;
    } else if (obj2[elt] > obj1[elt]) {
      return `2:${elt.repeat(obj2[elt])}`;
    } else if (obj2[elt] == obj1[elt]) {
      return `=:${elt.repeat(obj2[elt])}`;
    } else if (obj1.hasOwnProperty(elt) && !obj2.hasOwnProperty(elt)) {
      return `1:${elt.repeat(obj1[elt])}`;
    } else {
      return `2:${elt.repeat(obj2[elt])}`;
    }
  });

  // Sorting the substrings
  substrings.sort((a, b) => {
    if (a.slice(2).length === b.slice(2).length) {
      if (a[0] === b[0]) {
        // Check if a[2] and b[2] exist before comparing
        if (a[2] && b[2]) {
          return a[2].localeCompare(b[2]);
        }
        return 0;
      }
      return a[0] < b[0] ? -1 : 1; // Prioritize 1, then 2, then =
    }
    return b.slice(2).length - a.slice(2).length;
  });

  return substrings.join("/");
};

console.log(mix(" In many languages", " there's a pair of functions"));
