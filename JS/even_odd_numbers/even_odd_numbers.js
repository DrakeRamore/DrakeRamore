function countEvenOddNumbers(n) {
    var result = {
        even: 0,
        odd: 0
    };
    n = n.toString();
    for (i in n) {
        if (parseInt(n[i]) == 0) {
            result.even += 1;
        }
        else if (parseInt(n[i]) % 2 == 0) {
            result.even += 1;
        }
        else {
            result.odd += 1;
        }
    }
    return result;
}

var number = 111222345;

console.log(countEvenOddNumbers(number));