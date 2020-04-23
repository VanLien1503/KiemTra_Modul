
let findMax = function (integer, integerArray) {
    for (let i = 0; i < array.length; i++) {
        if (integerArray[i] === integer) {
            integerArray.splice(integerArray[i], 1);
        }
    }
   return integerArray;
};
