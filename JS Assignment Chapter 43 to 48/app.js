// Chapter no 43 to 48

// Q 1

// function show(){
//    let a =  alert("Hallo World:");
//    document.getElementById("a").innerHTML = a;
// }

// Q 2

// function show(){
//    let a =  swal("Thanks!", "For Purchasing a Phone For US!", "success");
//    document.getElementsByTagNameNS("p").;
// }

// Q 3

// function deleteRow(button) {
//     // Find the row that contains the button that was clicked
//     var row = button.parentNode.parentNode;
//     // Remove the row from the table
//     row.parentNode.removeChild(row);
//   }

// Q 4

// function changeImg() {
//   let a = document.getElementById("img").src = "image/iphone 7 plus.jpg"
// }

// function changeImgBack() {
//   let b = document.getElementById("img").src = "image/Iphone14..jpg"
// }

// Q 5

var counter = 0;
function increase() {
  counter++
  document.getElementById("counter").innerHTML = "Counter: " + counter
}
function decrease() {
  counter--
  document.getElementById("counter").innerHTML = "Counter: " + counter
}

