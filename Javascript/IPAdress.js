function ipToNum(ip) {
    return parseInt(ip.split(".").map(elt => Number(elt).toString(2).toString().padStart(8,"0")).join(""),2)
}

function numToIp(num) {
    let proo = [];
    let pro = num.toString(2).padStart(32, '0'); // Pad with leading zeros to ensure 32 bits
    
    for (let i = 0; i < 4; i++) {
        let pry = [];
        for (let o = 0; o < 8; o++) {
            pry.push(pro[o + i * 8]); // Access the correct index based on the group of 8 bits
        }
        proo.push(parseInt(pry.join(""), 2));
    }

    return proo.join(".");
}