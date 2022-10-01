// 1 m = 100 cm
// 1 cm = 1/100 m = 0.01 m
// 2 cm = (0.01*2) = 0.02 m
// formula: 0.01 * input
// do with error message handling

function centimeterToMeter(inputLength) {
    if (inputLength < 0) {
        return "Length value cannot be negative";
    }
    else {
        var meterLength = 0.01 * inputLength;
        // console.log(meterLength);
        return meterLength;
    }
}
const result = centimeterToMeter(25);
console.log("The result is" + " " + result);