let find = [1, 2, 8, 7, 6, 3];
let findMax = 0;
for (let i = 0; i < find.length; i++) {
    if (find[i] > findMax) {
        findMax = find[i];
    }
}
document.write("Số Điểm Cao Nhất Tìm Thấy Trong Mảng Là : "+findMax);
