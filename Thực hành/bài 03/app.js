let isFibonaci = [];
let integer = 5;
let checkInterger = false;
let resultInterger = false;

function check() {
    let number = parseInt(document.getElementById("number").value);
    for (let i = 0; i <= number; i++) {
        let f0, f1, fn;
        f0 = 0;
        f1 = 1;
        fn = f1 + f0;
        for (i = 0; i < number; i++) {
            fn = f0 + f1;
            f0 = f1;
            f1 = fn;
            isFibonaci.push(fn);
        }
    }
    document.write(isFibonaci);
    for (let i = 0; i < isFibonaci.length; i++) {
        if (isFibonaci[i] == integer) {
            checkInterger = true;
            break;
        } else {
            checkInterger = false;
        }
    }
    if (checkInterger === true) {
        resultInterger = true;
    }
    alert("Số Nguyên : " + integer + " tìm trong mảng là : " + resultInterger);
}


