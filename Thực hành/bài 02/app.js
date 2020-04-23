let integerArray = [1, 2, 3, 4, 5, 6, 7];
let integer = 3;
for (let i = 0; i < integerArray.length; i++) {
    if (integerArray[i] === integer) {
        integerArray.splice(integerArray[i], 1);
    }
}
document.write(integerArray);