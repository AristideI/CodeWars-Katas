// Algorithms
// 1. Create a function that takes in a string and returns a new string with the first letter of each word capitalized.

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * What is Algorithm?
 * - A process or set of steps to accomplish a certain task.
 * - How we solve problems.
 * - Can be written in pseudocode or any programming language.
 * - Can be written in many different ways.
 * - Can be optimized.
 * - Can be written in many different ways.
 * - Can be optimized.
 *
 * real life example:
 * - Recipe for baking a cake.
 *
 *
 * Characteristics of Algorithm:
 * - well defined inputs and outputs
 * - clear and unambiguous
 * - Language agnostic
 */

/**
 * How To Measure Algorithm Efficiency?
 * - Time Complexity
 * - Space Complexity
 *
 */

/**
 * Asymptotic Notation
 * - Big O : worstt case scenario
 * - Omega : best case scenario
 * - Theta : average case scenario
 */
