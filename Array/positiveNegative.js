// Find the positive or negative number from an array
// numbers = [1,2,3,-4,5,6,-7,-8,-0.9,10]
function positiveNegative(nums) {
    for (var i = 0; i < nums.length; i++) {
        var element = nums[i];
        if (element > 0) {
            console.log(element, "is positive");
        }
        else {
            console.log(element, "is negative");
        }
    }
}
var numbers = [1, 2, 3, -4, 5, 6, -7, -8, -0.9, 10];
positiveNegative(numbers);
