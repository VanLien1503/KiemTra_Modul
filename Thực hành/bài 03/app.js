let integer = parseInt(prompt("nhập số nguyên cần kiểm tra"));
let fibonaci = [];

function isFibonaci(integer, fibonaci) {

    if (fibonaci.indexOf(integer) === -1) {
        return false;
    } else {
        return true;
    }
}
// tạo số Fibo rồi push vào mảng
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
            fibonaci.push(fn);
        }
    }
    alert(number + " kiểm trả trong mảng  kết quả trả về là : " + isFibonaci(integer, fibonaci));
    document.write("số FiBo trong mảng là: " + fibonaci);
}



