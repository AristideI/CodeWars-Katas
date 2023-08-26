export function removeNb(n:number):number[][] {
    const totalSum:number = (n * (n + 1)) / 2;
    let retArr:number[][] = [];

    for (let a = 1; a <= n; a++) {
        let b:number = (totalSum - a) / (a + 1);
        
        if (b <= n && b === Math.floor(b)) {
            retArr.push([a, b]);
        }
    }

    return retArr;
}