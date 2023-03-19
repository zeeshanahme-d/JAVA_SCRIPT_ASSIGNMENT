// Chapter No 35 to 38

// Q 1

// function displayDateTime() {
//     let new_date = new Date();
//     let date = new_date.toDateString();
//     let time = new_date.toLocaleTimeString()
//     alert("Current Date: "+date+"\nCurrent Tiem: "+time)
// }
// displayDateTime();

// Q 2

// let firstName = prompt("Enter your First Name:");
// let secondtName = prompt("Enter your Second Name:");
// function fullName(firstName, secondtName) {
//     var full_name = firstName + " " + secondtName;
//     alert("Hallo "+full_name+" Nice to meet you:");
// }
// fullName(firstName,secondtName);

// Q 3

// function addnumbers() {
//     let num1 = parseInt(prompt("Enter First Number"))
//     let num2 = parseInt(prompt("Enter Second Number"))
//     let sum = num1 + num2
//     return sum;

// }
// document.write("The Sum result is: " + addnumbers());

// Q 4

// var num_1 = parseInt(prompt("Enter First number:"));
// var operator = prompt("Enter operator number:", "+ , - , * , / , % ");
// var num_2 = parseInt(prompt("Enter second number:"));
// var result;
// function calculator(num_1, operator, num_2) {
//     if (operator === "+") {
//         result = num_1 + num_2;
//     }
//     else if (operator === "-") {
//         result = num_1 - num_2;
//     }
//     else if (operator === "*") {
//         result = num_1 * num_2;
//     }
//     else if (operator === "/") {
//         result = num_1 / num_2;
//     }
//     else if (operator === "%") {
//         result = num_1 % num_2;
//     }
//     else {
//         alert("Please enter a valid operator:, e.g: + , - , * , / , % ")
//     }
//     return result;

// }
// document.write("The result of " + num_1 + " " + operator + " " + num_2 + " = " + calculator(num_1, operator, num_2));

// Q 5

// function sequare(x, y) {
//     return x * y;
// }
// var num = 5;
// var num2 = 2;
// var result = sequare(num, num2);
// document.write("The result is: " + result);

// Q 6

///////////////////////////////////?

// Q 7


// var firstNumInput = prompt("Enter any start number where you start counting:");
// var secondtNumInput = prompt("Enter any End number where you stop counting:");

// function countingNumber(firstNumInput, secondtNumInput) {

//     if (firstNumInput < secondtNumInput) {
//         for (let i = firstNumInput; i <= secondtNumInput; i++) {
//             document.write(+ i + '<br> ')

//         }
//     }
//     else if (firstNumInput > secondtNumInput) {
//         for (let i = firstNumInput; i >= secondtNumInput; i--) {
//             document.write(+ i + '<br> ')

//         }
//     }
// }
// countingNumber(firstNumInput, secondtNumInput);

// Q 8 ???????????????????????????????

// Q 9 ???????????????????????????????

// Q 10

// function checkWords() {
//     var userINput = prompt("Checks whether a passed string is palindrome or not:");
//     var palindrome = userINput.split("").reverse().join("");
//     if (userINput === palindrome) {
//         document.write("This " + palindrome + " is Palindrome Word:")
//     } else {
//         document.write("This " + palindrome + " is not Palindrome Word:")
//     }
// }
// checkWords();

// Q 11

// var string = prompt("Enter your full name:");
// function toUpperCase(string) {
//     var UpperCase = string.split(" ");
//     var str = [];
//     for (let i = 0; i < UpperCase.length; i++) {
//         var result = UpperCase[i][0].toUpperCase() + UpperCase[i].slice(1).toLowerCase();
//         str.push(result);
//     }
//     document.write(str.join(" "));
// }
// toUpperCase(string);

// Q 12

// function largeString(str){
//     var words = str.split(' ');
//     var largWord = '';
//     for (let i = 0; i < words.length; i++) { 
//          if(words[i].length > largWord.length){
//             largWord = words[i];
//         }
//     }
//     return largWord;
// }

// largWord = largeString('wel come to javascript');
// document.write(largWord)


  







