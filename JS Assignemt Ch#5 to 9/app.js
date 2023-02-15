// Chapter 6 to 9

// Q 1

// var a = 10;
// document.write("The value of a is: " + a + "<br /><br />");
// var a = 10;
// ++a
// document.write("The value of ++a is: " + a + "<br /> Now the value of a is: " + a + "<br /><br />");
// var a = 11;
// var a = a++ +;
// document.write("The value of a++ is: " + a + "<br /> Now the value of a is: " + a + "<br /><br />");
// var a = 12;
// var a = --a;
// document.write("The value of --a is: " + a + "<br /> Now the value of a is: " + a + "<br /><br />");
// var a = 11;
// var a = --a;
// document.write("The value of --a is: " + a + "<br /> Now the value of a is: " + a + "<br />");

// Q 2

// var a = 2;
// b = 1;
// var result = --a - --b + ++b+b;
// document.write("a is: 2 <br /> b is: 1 <br /> The result is:"+result);

// Q 3

// var uName = prompt('Enter your Name')
// alert("Thanks")

// Q 4 & 5

// let num = window.prompt("Enter a number:", "5");
// num = parseInt(num) || 5;

// document.write("<table border='1'>");
// for (let i = 1; i <= 10; i++) {
//     document.write("<tr>");
//     document.write("<td>" + num + " x " + i + " = " + num * i + "</td>");
//     document.write("</tr>");
// }
// document.write("</table>");

// Q 6

// QUESTION #6

// var marksObtained1stSubject = prompt("Enter English Subject Number")
// var marksObtained2ndSubject = prompt("Enter Math Subject Number")
// var marksObtained3rdSubject = prompt("Enter Physics Subject Number")
// var totalMarks = 100
// var Totle = 300

// var percentageIn1stSubject = marksObtained1stSubject / totalMarks * 100;

// var percentageIn2ndSubject = marksObtained2ndSubject / totalMarks * 100;

// var percentageIn3rdSubject = marksObtained3rdSubject / totalMarks * 100;

// var result = percentageIn1stSubject + percentageIn2ndSubject + percentageIn3rdSubject;

// document.write("<table> <tr><th>Subjects</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th></tr>");

// document.write("<tr> <td>English</td> <td>" + totalMarks + "</td> <td>" + marksObtained1stSubject + "</td> <td>" + percentageIn1stSubject + "</td> </tr>");

// document.write("<tr> <td>Mathimatics</td> <td>" + totalMarks + "</td> <td>" + marksObtained2ndSubject + "</td> <td>" + percentageIn2ndSubject + "</td> </tr>");

// document.write("<tr> <td>Physics</td> <td>" + totalMarks + "</td> <td>" + marksObtained3rdSubject + "</td> <td>" + percentageIn3rdSubject + "</td> </tr>");

// document.write("<tr> <td>Totle Marks</td> <td>" + totalMarks * 3 + "</td> <td>" + result + "</td> <td>" + result/Totle*100 + "</td </tr> </table>")

