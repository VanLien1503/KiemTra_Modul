let integerArray = [];
let integer = x;
for (let i = 0; i < integerArray.length; i++) {
    if (integerArray[i] === integer) {
        integerArray.splice(integerArray[i], 1);
    }
}
document.write(integerArray);