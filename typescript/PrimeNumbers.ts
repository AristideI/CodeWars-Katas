export const primeFactors = (n: number): string => {
    let result = "";
    let p = 2;  // Starting with the smallest prime number

    while (n > 1) {
        let count = 0;

        // Count how many times n is divisible by p
        while (n % p === 0) {
            n /= p;
            count++;
        }

        // If n was divisible by p at least once, append it to the result
        if (count > 0) {
            result += `(${p}`;
            if (count > 1) {
                result += `**${count}`;
            }
            result += `)`;
        }

        p++;
    }

    return result;
};