// Find the largest name string from an array.

let instructors = ['Mezbah', 'Abdullah', 'Gias', 'Al-Amin'];
function largestName(names) {
    let largest = names[0];
    for (var i = 0; i < names.length; i++) {
        var element = names[i];
        if (element.length > largest.length) {
            largest = element;
        }
    }
    return largest;
}
//as we are returning, we have to store it into a variable
var result = largestName(instructors);
console.log("The largest name is:", result);