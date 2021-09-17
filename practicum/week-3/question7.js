/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function (M) {
    let result = [];
    for (let i = 0; i < M[0].length; i++) {
        result[i] = [];
    }
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < M.length; j++) {
            result[i][j] = M[j][i];
        }
    }
    return result;
};