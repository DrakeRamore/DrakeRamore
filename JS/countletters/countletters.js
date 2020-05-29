function countLetters (n) {
    result = {};
    for (var letter in n) {
        if (result.hasOwnProperty(n[letter])) {
            result[n[letter]] += 1;
        }
        else {
            result[n[letter]] = 1;
        }
    }
    return result;
}
var n = "Hello Worldddd";
console.log(countLetters(n));