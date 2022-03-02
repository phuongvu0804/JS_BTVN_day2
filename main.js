/* Bài 1: 
  input: 
+Lương 1 ngày
+Số ngày làm
  Process:
+khai báo các biến: lương 1 ngày, số ngày làm, lương 1 tháng
+Gán giá trị cho biến: lương 1 ngày
+Tạo công thức tính lương như sau: lương = lương 1 ngày * số ngày làm
  Output:
+Lương 1 tháng */
var salaryPerDay = 100.000;
var workingDay;
var totalSalary = salaryPerDay * workingDay


/* Bài 2: 
  input: 
+ 5 số thực
  Process:
+khai báo các biến: số thực 1, số thực 2, số thực 3, số thực 4, số thực 5
+Tạo công thức tính trung bình như sau: trung bình 5 số thực = tổng 5 số thực / 5
+Tạo câu lệnh alert(trung bình 5 số thực)
  Output:
+Trung bình 5 số thực 
+Kết quả được xuất ra*/
var realNumber1;
var realNumber2;
var realNumber3;
var realNumber4;
var realNumber5;
var averageOfRealNumbers = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5;
alert(averageOfRealNumbers);


/* Bài 3: 
  input: 
+Giá trị VND của 1USD 
+Số lượng tiền quy đổi
  Process:
+khai báo các biến: giá trị VND của 1USD, số lượng tiền quy đổi
+Gán giá trị cho biến giá trị VND của 1USD
+Tạo công thức tính số tiền sau khi quy đổi VND như sau: số tiền quy đổi từ USD ra VND = số lượng tiền USD * giá trị VND của 1USD
+Tạo câu lệnh alert(số tiền quy đổi ra VND)
  Output:
+Trung bình 5 số thực 
+Kết quả được xuất ra*/
var vndValueOf1USD = 23.500;
var amountOfUsd = 2;
var convertedAmount;
var convertedAmount = amountNOfUsd * vndValueOf1USD;
alert(convertedAmount);


/* Bài 4: 
  input: 
+2 chiều dài của HCN 
+chiều rộng của HCN
  Process:
+khai báo các biến: chiều dài của HCN , chiều rộng của HCN
+Tạo công thức tính diện tích HCN như sau: diện tích HCN = chiều dài * chiều rộng
+Tạo công thức tính chu vi HCN như sau: chu vi HCN = (chiều dài + chiều rộng) * 2
+Tạo câu lệnh alert(diện tích HCN, chu vi HCN)
  Output:
+Diện tích, chu vi của HCN
+Kết quả được xuất ra */
var length;
var width;
var area = length * width;
var perimeter = (length + width) * 2;
alert(area, perimeter);


/* Bài 5: 
  input: 
+1 số có 2 chữ số
  Process:
+khai báo các biến: số 
+Tạo công thức tính hàng đơn vị như sau: hàng đơn vị = Math.floor(số%10)
+Tạo công thức tính hàng chục như sau: hàng chục = Math.floor(số %100/10)
+Tạo công thức tính tổng 2 ký số như sau: tổng = hàng đơn vị + hàng chục
  Output:
+Tổng 2 ký số của số được nhập*/
var number;
var unit = Math.floor(number % 10);
var ten = Math.fllor(number % 100 / 10);
var sum = ten * unit;
