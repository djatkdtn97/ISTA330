/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function (input) {
    let maxDInteger = -1, count = 0;
    for (let i = 0; i < input.length; i++) {
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (input[i] === input[j]) {
                ++count;
            }
        }
        if (count === input[i]) {
            if (count === 0 || input[i] > maxDInteger) {
                maxDInteger = input[i];
            }
            ++count;
        }
    }
    return maxDInteger;
};