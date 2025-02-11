/**
 * A Map is an unordered collection of key value parin, both keys and values can be of any type
 *
 * to retrive a value from a map, you must know the key
 *
 * maps are iterable, so you can iterate through a map using a for of loop
 *
 */

/**
 * Maps vs Objects
 *
 * objects are unorderd collections of key value pairs
 *
 * keys in objects are strings, where as keys in maps can be of any type
 *
 * an object has a prototype and may contain default keys that could collide with your own keys if you're not careful
 *
 * maps are iterable and have a size property
 */

const map = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);

for (const [key, value] of map) {
  console.log(key, value);
}
