// "Hello! We are Hero ku"
// string.length = length of that string
// string[index]

function reversedString(text) {
    var reversed = ""
    for (var i = text.length - 1; i >= 0; i--) {
        var element = text[i];
        reversed = reversed + element;
    }
    console.log(reversed);
}
reversedString("Hello! We are Hero ku");