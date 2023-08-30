"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchDisable = void 0;
function searchDisable(logs) {
    var counter = {};
    var log = logs.split(" ");
    for (var _i = 0, log_1 = log; _i < log_1.length; _i++) {
        var elt = log_1[_i];
        if (counter.hasOwnProperty(elt)) {
            counter[elt]++;
        }
        else {
            counter[elt] = 1;
        }
    }
    var bots = Object.keys(counter).filter(function (elt) {
        return prime(Number(elt)) &&
            elt.length > 3 &&
            (elt[2] === "2" || elt[2] === "3") &&
            counter[elt] > 3;
    });
    var disable = {};
    bots.forEach(function (elt) {
        disable[elt] = counter[elt];
    });
    var counts = Object.values(disable).reduce(function (a, b) { return a + Number(b); }, 0);
    return counts > 50 ? "match disable bot" : "no match continue";
}
exports.searchDisable = searchDisable;
function prime(a) {
    for (var i = 2; i * i <= a; i++) {
        if (a % i === 0)
            return false;
    }
    return true;
}
var log1 = "1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031 1031";
var log2 = "2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031 2031";
var log3 = "7693 3051 1999 7307 4323 4968 2666 4267 9264 2399 66 5739 300 9119 2399 5177 4649 2492 2471 7301 6192 9981 1828 2698 9386 8967 1502 9014 8799 5098 7155 5090 3909 2096 6296 2835 5746 9291 2312 6419 1740 1998 6281 3328 7590 3903 4197 1804 2223 7495 4483 234 9294 9882 2793 6959 320 3495 3540 5308 6453 8666 921 4174 7987 6834 6755 4487 8396 2577 9191 6323 2684 2914 7651 2941 2897 3401 409 4381 9679 6791 927 6590 1683 2118 423 8844 7565 7052 9809 6121 6263 1614 9606 4078 7386 5360 8982";
var log4 = "8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923 5639 2423 3929 7723 8923";
var log5 = "5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 5639 2423 2423 2423 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929 3929";
console.log(searchDisable(log1));
console.log(searchDisable(log2));
console.log(searchDisable(log3));
console.log(searchDisable(log4));
console.log(searchDisable(log5));
