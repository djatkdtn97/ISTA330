/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input){
    var result = [];
    var minDiff = Math.abs(input[1] - input[0]);
    var size = input.length;
    for(var i = 0;i<size;i++){
        for(var j = i+1;j<size;j++)
            if(Math.abs(input[j] - input[i]) < minDiff)
                minDiff = Math.abs(input[j] - input[i]);
    }
    for(var i = 0;i<size;i++){
        for(var j = i;j<size;j++)
            if(Math.abs(input[j] - input[i]) == minDiff){
                if(input[i] < input[j])
                    result.push([input[i],input[j]]);
                else result.push([input[j],input[i]]);
        }
    }
    return result.sort((a,b) => a[0] <= b[0]);
}