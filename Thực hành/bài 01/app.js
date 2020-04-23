let findMax = function (a, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > a) {
            array[i] = max;
        }
    }
    return array[i];
};
