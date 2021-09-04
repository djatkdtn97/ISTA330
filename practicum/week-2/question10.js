/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    if (n < 0) n = -1 * n;    // remove the sign
    if (n < 10) return 0;
    let min = 9, max = 0;
    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);
        if (digit > max) max = digit;
        if (digit < min) min = digit;
    }
    return max - min;
};