export function solve(s: string): number {
    // Helper function to get the numeric value of a letter
    function letterValue(ch: string): number {
        return ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    let maxSum:number = 0;
    let currentSum:number = 0;

    for (let i = 0; i < s.length; i++) {
        // Check if the character is a consonant
        if ('aeiou'.indexOf(s[i]) === -1) {
            currentSum += letterValue(s[i]);
        } else {
            // If we reach a vowel, check if currentSum is greater than maxSum
            if (currentSum > maxSum) {
                maxSum = currentSum;
            }
            // Reset currentSum since we've hit a vowel
            currentSum = 0;
        }
    }

    // Check one last time outside the loop in case the last substring is the largest one
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }

    return maxSum;
}