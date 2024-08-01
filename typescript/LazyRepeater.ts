export function makeLooper(input: string): () => string {
    let index = 0;

    return function(): string {
        const result = input[index];
        index = (index + 1) % input.length;
        return result;
    };
}