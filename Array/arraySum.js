// Print all the element in an array and find the sum of all the elements.
// Essentials for solving the problem are below:
// input: [1,2,3,4,5,6,7,8,9,10]
// output: 55
// arrayName[index]
// array indexing starts from 0
// arrayName.length -->  it gives us the number of elements present in the array

// At first we need to print all the elements of the array:

function arraySum(nums) {
    var cash = 0;
    for (var i = 0; i < nums.length; i++) {
        // console.log(nums[i]); this will print the elem of arr
        //then, for sum the elem of the arr:
        var element = nums[i];
        cash = cash + element;
    }
    return cash;
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var result = arraySum(numbers);
console.log("The result is", result);