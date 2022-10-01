// print a multiplication table

function timesTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + "*" + i + "=" + i * num)
    }
}
timesTable(17);