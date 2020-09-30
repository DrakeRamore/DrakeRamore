function findLongestWord(str) {
    var words = str.split(" ");
    var result = words[0];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > result.length) {
            result = words[i];
        }
    }
    return result;
}

var str = "asdas asdasdbbb asdasd asd";

console.log(findLongestWord(str));