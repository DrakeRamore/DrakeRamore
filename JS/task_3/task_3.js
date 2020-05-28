function sum(a,b) {
    var sum_ = 0;
    for (i = 0; i < b; i++) {
        sum_ = a + sum_ + Math.pow(10,i) + sum(a,b - 1);
    }
    return sum_;
}

var n;
var count;

n = Number(prompt("Enter a number"));
count = Number(prompt("Enter a quantity"));

var summary = sum(n,count);
console.log(summary);

