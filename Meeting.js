function meeting(s) {
  return s
    .toUpperCase()
    .split(";")
    .map((elt) => {
      const [firstName, lastName] = elt.split(":");
      return `(${lastName}, ${firstName})`;
    })
    .sort((a, b) => a.localeCompare(b))
    .join("");
}

console.log(
  meeting(
    "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
  )
);
// meeting(
//   "John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"
// );

// console.log(
//   meeting(
//     "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
//   )
// );
