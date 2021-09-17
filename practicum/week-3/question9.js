/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let digit_sum = {};
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let num = i;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (!digit_sum[sum]) {
            digit_sum[sum] = [];
        }
        digit_sum[sum].push(i);
    }
    let max_count = 0;
    for (let n in digit_sum) {
        if (digit_sum[n].length > max_count) {
            max_count = digit_sum[n].length;
        }
    }
    let result = 0;
    for (let n in digit_sum) {
        if (digit_sum[n].length === max_count) {
            ++result;
        }
    }
    return result;
};