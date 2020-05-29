function Fibonacci(n) {
    if (n <= 0) {
        return null;
    }
    else {
        var array = [1];
        if (n == 1) {
            return array;
        }
        else if (n == 2) {
            array.push(1);
            return array;
        }
        else {
            array = [1, 1];
            for (var i = 2; i < n; i++) {
                array.push(array[i - 2] + array[i - 1]);
            }
            return array;
        }

    }
}

var n = prompt("enter a number");
console.log(Fibonacci(n));