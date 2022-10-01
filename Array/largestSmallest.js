// Find the Largest or Smallest element( number and string ) from an array.
// [1, 2, 3, -4, 5, 6, -7, -8, -0.9, 10]
// large 1 initially
// 8---- -10: large 8
function largestNumber(nums) {
    var largest = nums[0];
    for (var i = 0; i < nums.length; i++) {
        var element = nums[i];
        if (element > largest) {
            largest = element
        }
    }
    return largest;
}
var result = largestNumber([1, 2, 3, -4, 5, 6, -7, 8, -0.9, -10])
console.log(result);