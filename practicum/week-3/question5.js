/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function (input) {
    let is_ascending = true, is_descending = true;
    for (let i = 1; i < input.length; i++) {
        if (input[i-1] > input[i])
            is_ascending = false;
        if (input[i-1] < input[i])
            is_descending = false;
    }
    return is_ascending || is_descending;
};

console.log('hi');