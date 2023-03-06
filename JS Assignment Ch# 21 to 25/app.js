//  Chapter no 21 to 25

// Q 1

// let first_name = prompt("Enter your first name");
// let second_name = prompt("Enter your second name");
// let full_name = first_name + " " + second_name;
// alert("Hay " + full_name + " Nice to meet you");

// Q 2

// let phone_name = prompt("Enter your favourite mobile phone modle:");
// let a = phone_name.length;
// document.write("My favourite phone is: " + phone_name + " Length is: " + a);

// Q 3

// let str = "I am from Pakistan";
// document.write("String: " + str+"<br>");
// let index = str.indexOf("f");
// document.write("Index of 'f': " + index);

// Q 4

// let str = "I am from Pakistan";
// document.write("String: " + str+"<br>");
// let index = str.lastIndexOf("t");
// document.write("Last Index of 't': " + index);

// Q 5

// let str = "I am from Pakistan";
// document.write("String: " + str+"<br>");
// let index = str.charAt(3);
// document.write("Character at index '4': " + index);

// Q 6

// let a ="Hallo"
// let b ="World"
// let c ="!"
// let result = a.concat(" ",b,c);
// document.write(result);

// Q 7

// let city = "Hyderabad";
// document.write("City: " + city + "<br>");
// let replace = city.replace("Hyder","Islam")
// document.write("After replasment: " + replace );

// Q 8

// let message = "Ali and Sami are best friends. They play cricket and football together."
// let replace = message.replaceAll("and","&");
// document.write("String: "+message+"<br> After replasment: "+replace);

// Q 9

// let a = "472";
// let b = 442
// document.write("Value: " + a + " & Type: " + typeof (a) + "<br>Value: " + b + " & Type: " + typeof (b))

// Q 10

// let user_input = prompt("Enter food name");
// document.write("User input: " + user_input+"<br> Upper case: " + user_input.toUpperCase());

// Q 11

// let user_input = prompt("Enter food name");
// let result =  user_input[0].toUpperCase() + user_input.slice([1])
// document.write("User input: " + user_input + "<br> Title case: " +result);

// Q 12

// let a = 35.36;
// let result = a.toString().replace(".","");
// document.write("Number: "+a+"<br> Result: "+result)

// Q 13 // ( A );



// let user_input = prompt("Enter your Name:");
// var flag = false;
// for (let i = 0; i < user_input.length; i++) {
//     if (user_input[i] === "@" || user_input[i] === "." || user_input[i] === "," || user_input[i] === "!") {
//         flag = true;
//         break;
//     }
// }
// if (flag) {
//     alert("Please enter a valid username:");
// } else {
//     alert("Hay " + user_input + " Nice to meet you:")
// }

// Q 13 // ( B );

// let a = prompt("enter name");
// let b = /[@ , . ?; !]/
// if (b.test(a)) {
//     alert("Please enter a valid username:");
// } else {
//     alert("Hay " + a + " Nice to meet you:")
// }

// Q 14


// var user_input = prompt("Enter Food Name Which You Find:");
// var user_input = user_input[0].toUpperCase()+ user_input.slice([1]);
// var arr = ['Cake', 'Apple pie', 'Cookie', 'Chips', 'patties'];
// var flag = false;
// for (let i = 0; i < arr.length; i++) {
//     if (user_input === arr[i]) {
//         document.write(user_input + " is available at index " + i + " in our bakery: <br>");
//         flag = true;
//         break;
//     }
// }
// if (flag) {
// } 
// else {
//     document.write("We are sorry. " + user_input + " is not available in our bakery:");
// }

// Q 15

// var password = prompt("Enter a Password: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long ")
// var a = /[@!,." "&%$# \d]/
// if (a.test(password) || password.length < 6) {
//     alert("Invalid password. Password not Meet Requirement: \n a. It should contain alphabets and numbers \n b. It should not start with a number \n c. It must at least 6 characters long")
// }else{
//     alert("Password Accepted:")
// }


// Q 16

// var user_input = prompt("enter your country name:");
// var a = user_input.charAt( user_input.length - 1);
// document.write("User input: "+user_input+"<br> Last character of input: "+a)

// Q 17

// var uni = "University of Karachi";
// var uni = uni.split("");
// console.log(uni);

// Q 18

// let str = " The Quick Brown Fox Jump Over The Lazy Dog";
// let count = 0
// let arr = str.split(" ");
// for (let i = 0; i < arr.length; i++) {
// if(arr[i] === "The"){
//     count++
// }
// }
// document.write("The word 'The' appears "+ count+ " times in the string.");







