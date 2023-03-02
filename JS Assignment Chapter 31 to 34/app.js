// chapter No 31 to 34.

// Q 1

// let a = new Date();
// document.write(a);

// Q 2

// let a = new Date();
// let month = a.getMonth();
// let month_name = ["January", "February", "March", "Aprail", "May", "Jun", "July", "August", "September", "Octuber", "November", "December"];
// month = month_name[month];
// alert("Current month: " + month);

// Q 3

// let a = new Date();
// let days = a.getDay();
// let days_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// days = days_name[days];
// alert("Today is " + days);

// Q 4

// let a = new Date();
// let days = a.getDay();
// let days_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// days = days_name[days];
// if(days === "Saturday" || days ==="Sunday" ){
//     alert("Today is Fun Day:")
// }else{
//     alert("Today is Work Day");
// }

// Q 5

// let a = new Date();
// let days = a.getDate();
// if(days <= 15 ){
//     alert("First fifteen days of the month")
// }else{
//     alert("Last days of the month");
// }

// Q 6

// let a = new Date();
// document.write("Current Date:: " + a + "<br>");
// let b = a.setMilliseconds(1,1970);
// document.write("Elapsed milliseconds since January 1, 1970:: " + b + "<br>");
// let c = a.setMinutes(1970);
// document.write("Elapsed minutes since January 1, 1970:: " + c);

// Q 7

// let a = new Date();
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();

// if(h >=12){
//     h =h -12
//    alert("It' PM")
// }else{
//     alert("It' AM")
// }

// Q 8

// let latterDate = new Date(2021, 11, 31);
// document.write("Later Date:: " + latterDate)

// Q 9

// let ramadanStartDate = new Date(2015, 5, 18);
// let millisecondsSinceRamadan1 = Date.now() - ramadanStartDate.getTime();
// let daysSinceRamadan1 = Math.floor(millisecondsSinceRamadan1 / (1000 * 60 * 60 * 24));
// alert("Number of days since 1st Ramadan: " + daysSinceRamadan1);

// Q 10

// let a = new Date();
// let b = new Date(2015, 0, 1);
// document.write("On reference date " + b + "<br>");
// let sec = Math.floor((a - b) / 1000);
// document.write(sec + " seconds had passed since beginning of 2015")

// Q 11

// var a = new Date();
// document.write("current date: " + a + "<br>");
// var year = a.getFullYear() - 100;
// a.setFullYear(year)
// document.write("100 years back, it was " + a);

// Q 12

// let a = prompt("What is your age:");
// let b = new Date();
// let c = b.getFullYear() - a;
// document.write("Your age is " + a + "<br> Your birth year is " + c);

// Q 13

// let customer_name = "Zeeshan Ahmed";
// let date = new Date();
// let current_month = date.getMonth();
// let month_name = ["January", "February", "March", "Aprail", "May", "Jun", "July", "August", "September", "Octuber", "November", "December"];
// current_month = month_name[current_month];
// let numbers_of_units = 610;
// let charges_per_unit = 26;
// let late_pay_charges = 450;
// let net_amount = numbers_of_units * charges_per_unit;

// document.write("<h1>K-Electric Bill</h1> Customer Name: " + customer_name + "<br>")
// document.write("Month: " + current_month + "<br>");
// document.write("Numbers of Units: " + numbers_of_units + "<br>");
// document.write("Charges Per Units: " + charges_per_unit + "<br>");
// document.write("Net Amount Payable (Within Due Date): " + net_amount + "<br>");
// document.write("Late Payment Surcharge: " + late_pay_charges + "<br>");
// document.write("Gross Amount Payable (After Due Date): " + (net_amount + late_pay_charges));












