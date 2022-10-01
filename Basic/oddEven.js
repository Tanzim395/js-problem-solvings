// 18 to 36-- find the even and odd numbers
function oddEven(num1, num2) {
    for (var i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            console.log(i + "is even number")
        }
        else {
            console.log(i + "is odd number")
        }
    }
}
oddEven(18, 36);