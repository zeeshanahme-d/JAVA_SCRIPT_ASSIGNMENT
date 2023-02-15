// chapter 12 to 13

// Q 1 // ( A )

// var char = prompt("Enter a character:");
// var charCode = char.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     alert("The input is a number.");
// }
// else if (charCode >= 65 && charCode <= 90) {
//     alert("The input is an uppercase letter.");
// }
// else if (charCode >= 97 && charCode <= 122) {
//     alert("The input is a lowercase letter.");
// }
// else {
//     alert("The input is not a number or a letter.");
// }

// // ( B )

// var charCode = prompt("Enter a character:");

// if (charCode >= 1 && charCode <= 999999) {
//     alert("The input is a number.");
// }
// else if (charCode >="A" && charCode <= "Z") {
//     alert("The input is an uppercase letter.");
// }
// else if (charCode >= "a" && charCode <= "z") {
//     alert("The input is a lowercase letter.");
// }
// else {
//     alert("The input is not a number or a letter.");
// }

// Q 2

// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

// if (parseInt(num1, 10) > parseInt(num2, 10)) {
//     alert("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
// }
// else if (parseInt(num2, 10) > parseInt(num1, 10)) {
//     alert("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
// }
// else {
//     alert("The values " + num1 + " and " + num2 + " are equal.");
// }

// Q 3

// var number = prompt("Check The Number is Positive or Negative:")
// if (number >=  1 ) {
//     alert("This "+ number +" is Positive number:")
// }
// else if(number < 0){
//     alert("This "+ number +" is Negative number:")
// }
// else(
//     alert("This "+ number +" is Zero number:")
// )

// Q 4

// var vowel = prompt("Enter a Vowel Alphabet")
// if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
//     alert("True! This is a Vowel Alphabet:")
// }
// else (
//     alert("False! This is not a Vowel Alphabet:")
// )


// Q 5

// var userIntPass1 = prompt("Enter Your Password")
// var userIntPass2 = prompt("Conform Your Password")
// if(userIntPass1 == userIntPass2){
//     alert("Correct! The password you entered matches the original password:")
// }
// else(userIntPass1 !== userIntPass2)
//     alert("Your Password is Incorrect 'Plz Enter Correct Password':")

// Q 6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else (
//     greeting = "Good evening");

//     alert(greeting);

// Q 7

// var time = prompt(" Enter Time in 24 hours clock format like: 1900 = 7pm")
// if (time >= 0000 &&  time < 1200) {
//     alert("Good Morning:")
//  }
// else if (time >= 1200 &&  time < 1700) {
//     alert("Good Afternoon:")
//  }
// else if (time >= 1700 &&  time < 2100) {
//     alert("Good Evening:")
//  }
// else if (time >= 2100 &&  time < 2359) {
//     alert("Good Night:")
//  }



