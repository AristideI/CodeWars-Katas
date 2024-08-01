export function findMissingLetter(array: string[]): string {
    let letters = array[0].toLowerCase() === array[0] ? "abcdefghijklmnopqrstuvwxyz" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let startingIndex = letters.indexOf(array[0]);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== letters[startingIndex + i]) {
            return letters[startingIndex + i];
        }
    }
    // This line should never be reached if the input array is valid, 
    // but it's here to satisfy TypeScript's expected return.
    return '';
}