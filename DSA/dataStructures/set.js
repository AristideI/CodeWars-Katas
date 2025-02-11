/**
 * Sets
 *
 * a set is a data structure that can hold a collection of items. the items however must be unique
 *
 * set can contain a mix of different data types, and there is no order to the items in the set
 *
 * set are dynamic sized, you dont have to declare the size of the set
 *
 * sets do not maintain an insertion order
 *
 * sets are iterables, they can be used with a for of loop
 */

/**
 * Sets vs Arrays
 *
 * sets are similar to arrays, but have some differences
 *
 * 1. sets are not indexed based - you do not refer to items in a set based on their position in the set
 * 2. items in a set are unique - no two items can have the same value
 * 3. sets are iterables - you can loop through the elements of a set
 * 4. searching for items in a set is faster than in an array
 */

const set = new Set([1, 2, 3]);

const test = { name: "John" };
set.add(test);
set.add(test);

console.log(set);
