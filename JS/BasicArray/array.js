function array_oper(array) {
    var result = {
        max: array[0],
        min: array[0],
        sum: 0,
        prod_neg: 1,
        am_neg: 0,
        am_pos: 0
    };
    
    for (var i = 0; i < array.length; i++) {
        if (result.max < array[i]) {
            result.max = array[i];
        }
        if (result.min > array[i]) {
            result.min = array[i];
        }
        if (array[i] > 0) {
            result.sum += array[i];
            result.am_pos += 1;
        }
        if (array[i] < 0) {
            result.prod_neg *= array[i];
            result.am_neg += 1;
        }
    }
    return result;
}

array = [1, 3, -5, 15, 143, -4, -23, 45, 32, 3]

console.log(array_oper(array));
