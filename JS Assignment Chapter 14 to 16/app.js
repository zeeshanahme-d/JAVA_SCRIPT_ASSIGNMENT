// Chapter 14 to 16

// Q 1

// var arr = [];
// console.log(arr);

// Q 2

// var arr = {};
// console.log(arr);

// Q 3

// var arr = ["Hallow World"];
// console.log(arr);

// Q 4

// var arr = [100,200];
// console.log(arr);

// Q 5

// var arr = [true,false]
// console.log(arr);

// Q 6

// var arr = ["Hallow world", 100, 200, true, false];
// console.log(arr);

// Q 7

// var education = ['<ol> <li>) SSC </li>' + '<li>) HSC </li>' + '<li>) BCS </li>' + '<li>) BS </li>' + '<li>) BCOM </li>' + '<li>) MS </li>' + '<li>) M. Phil. </li>' + '<li>) PhD </li>']
// document.write('<h1> Qualification </h1> <h2>' + education + '</h2>')

// Q 8

// var names = ['Zeeshan', 'Hamza', 'Romaan Khan']
// var scors = [400, 390, 270]
// var totleScore = 500
// document.write('Score of ' + names[0] + ' is ' + scors[0] + '. Percentage is: ' + scors[0] / totleScore * 100 + '% <br>')
// document.write('Score of ' + names[1] + ' is ' + scors[1] + '. Percentage is: ' + scors[1] / totleScore * 100 + '% <br>')
// document.write('Score of ' + names[2] + ' is ' + scors[2] + '. Percentage is: ' + scors[2] / totleScore * 100 + '%')

// Q 9

// var colors = ['<b> Red ', ' Green ', ' Blue </b>']
// document.write("Original Array: " + colors + "<br>")

// var addColors = prompt("Enter the color you want to add to the beginning of the array:")
// colors.unshift(addColors)
// document.write("Updated Array (After Adding Color to the Beginning): <b>" + colors + "</b> <br>")

// var addColors = prompt("Enter the color you want to add to the End of the array:")
// colors.push(addColors)
// document.write("Updated Array (After Adding Color to the End): <b>" + colors + "</b> <br>")

// colors.unshift(" Pink ", " White ")
// document.write("Updated Array (After Adding Two More Colors to the Beginning): <b>" + colors + "</b> <br>")

// colors.shift()
// document.write("Updated Array (After Dleting First Colors to the Beginning): <b>" + colors + "</b> <br>")

// colors.pop()
// document.write("Updated Array (After Dleting Last Colors to the End): <b>" + colors + "</b> <br>")

// var index = prompt("Enter the index at which you want to add the color:", "1")
// addColors = prompt("Enter the color you want to add:")
// colors.splice(index, 0, addColors)
// document.write("Updated Array (After Adding Color at Desired Index): <b>" + colors + "</b> <br>")

// index = prompt("Enter the index at which you want to delete color(s):");
// var deletNumbersOfColors = prompt("Enter the number of colors you want to delete:");
// colors.splice(index, deletNumbersOfColors);
// document.write("Updated Array (After Deleting Color(s) from Desired Index): <b>" + colors + "</b> <br>");


// Q 10

// var arr = [320, 230, 480, 120, 11, 123, 888]
// document.write("Score of student: " + arr + '<br />')
// arr.sort()
// document.write("Oedered Score of student: "+arr)

// Q 11

// var citiesName = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
// document.write('<h3> Cities list: <br>' + citiesName + '</h3 <br>')

// var selectedCities = citiesName.slice(2,4)
// document.write('<h3> Slected cities list: <br>'+ selectedCities)


// Q 12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString); // Output: "This is my cat"


// Q 13

// const queue = [];

// queue.push("Zeeshan");
// queue.push("Ahtisham");
// queue.push("Shimran");

// const firstValue = queue.shift(); // firstValue is 1
// const secondValue = queue.shift(); // secondValue is 2
// const thirdValue = queue.shift(); // thirdValue is 3
// document.write(queue)

// Q 14

// const stack = [];

// // Add values to the end of the stack
// stack.push(1);
// stack.push(2);
// stack.push(3);

// // Retrieve values from the end of the stack
// const thirdValue = stack.pop(); // thirdValue is 3
// const secondValue = stack.pop(); // secondValue is 2


// Q 15

// var phonManufac = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier','Xiaomi','Vivo','Oppo','Huawie','Realme','Infinix','Tecno']
// document.write('<h1> Mobile Manufacture Companies list: </h1> <select> <option>'+phonManufac.slice(0,1) +'</option>')
// document.write('<option>'+phonManufac.slice(1,2) +'</option>')
// document.write('<option>'+phonManufac.slice(2,3) +'</option>')
// document.write('<option>'+phonManufac.slice(3,4) +'</option>')
// document.write('<option>'+phonManufac.slice(4,5) +'</option>')
// document.write('<option>'+phonManufac.slice(5,6) +'</option>')
// document.write('<option>'+phonManufac.slice(6,7) +'</option>')
// document.write('<option>'+phonManufac.slice(7,8) +'</option>')
// document.write('<option>'+phonManufac.slice(8,9) +'</option>')
// document.write('<option>'+phonManufac.slice(9,10) +'</option>')
// document.write('<option>'+phonManufac.slice(10,11) +'</option>')
// document.write('<option>'+phonManufac.slice(11,12) +'</option> </select>')
// const firstValue = stack.pop(); // firstValue is 1