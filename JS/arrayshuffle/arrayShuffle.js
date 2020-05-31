function arrayShuffle(array) {
    array.sort(function() {
        return (0.5 - Math.random());
    });
    return array;
}

var array = ["B", "A", "C", "D"];

console.log(array);

console.log(arrayShuffle(array));