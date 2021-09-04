/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function (A, B) {
    let count = 0;
    for (let i = 0; i < B.length; i++) {
        let found = false;
        for (let j = 0; j < A.length; j++) {
            if (B[i] === A[j])
                found = true;
        }
        if (found)
            ++count;
    }
    return count;
};