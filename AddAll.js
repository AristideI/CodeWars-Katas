function addAll(numbers) {
    numbers.sort((a, b) => a - b);

    let totalCost = 0;

    while (numbers.length > 1) {
        // Get the two smallest numbers
        const num1 = numbers.shift();
        const num2 = numbers.shift();

        // Calculate the cost and add it to the total
        const cost = num1 + num2;
        totalCost += cost;

        // Insert the sum back into the array
        // while maintaining the sorted order
        let insertIndex = 0;
        while (insertIndex < numbers.length && numbers[insertIndex] < cost) {
            insertIndex++;
        }
        numbers.splice(insertIndex, 0, cost);
    }

    return totalCost;
}