/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function (n) {
  if (n === 0) {
    return [];
  } else if (n === 1) {
      return [[1]];
  } else {
      let result = [[1], [1, 1]];
      for (let i = 2; i < n; i++) {
          let temp = [1];
          for (let j = 1; j < i; j++) {
              temp[j] = result[i-1][j-1] + result[i-1][j];
          }
          temp[i] = 1;
          result[i] = temp;
      }
      return result;
  }
};