function decomp(n) {
    let primes = [];
    let pro = [];

    for (let i = 2; i <= n; i++) {
        let checker = true;
        for (let j = 2; j*j <= i; j++) {
            if (i % j === 0) {
                checker = false;
                break;
            }
        }
        if (checker) {
            primes.push(i);
        }
    }

    primes.forEach(elt => {
        let times = 0;
        let num = n;
        while (num > 0) {
            num = Math.floor(num / elt);
            times += num;
        }
        if (times !== 0) {
            pro.push(elt + (times > 1 ? "^" + times : ""));
        }
    });

    return pro.join(" * ");
}