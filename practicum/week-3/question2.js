
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
        let highestSum = 0;
        let subarraySum = 0;
        input.forEach(function (item) {
                subarraySum += item; 
                highestSum = Math.max(highestSum, subarraySum); 
                if (subarraySum < 0) {
                        subarraySum = 0;
                }
        })
        return highestSum;
}
