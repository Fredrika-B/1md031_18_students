
function getOrder() {
  var array = [];
  var burgerBox = document.getElementsByName('burger')
  for (var i = 0, length = burgerBox.length; i< length ; i++) {
    if (burgerBox[i].checked) {
      array.push((burgerBox[i].value));
    }
  }
  return array
}

function getInputText() {
  var array = [];
  var fullnameValue = "name: " + document.getElementById('fullname').value
  var emailValue = " e-mail: " + document.getElementById('email').value
//  var adressValue = document.getElementById('address').value
//  var housenumberValue = document.getElementById('housenumber').value
  var payment = " payment: " + document.getElementById('payment').value
  var age = document.getElementsByName('age')

  array.push(fullnameValue);
  array.push(emailValue);
  //array.push(adressValue);
  //array.push(housenumberValue);
  array.push(payment);

  for (var i = 0, length = age.length; i< length ; i++) {
    if (age[i].checked) {
      array.push((" age:" + age[i].value));
    }
  }
  return array
}

export {getInputText};
export {getOrder};


/* OLD CODE
MENY FUNCTION
function MenuItem(pname, lactose, gluten, sorder) {
this.productName = pname;
this.lactose = lactose;
this.gluten = gluten;
this.sideOrder = sorder;
}
var burger1 = new MenuItem("Chili Dream", false, false, "French Fries");
var burger2 = new MenuItem("Chili Dream", true,true, "Chili Potatoes");
var burger3 = new MenuItem("Cheesy Burger", true,true, "Cheesegratinated French Fries");
var burger4 = new MenuItem("Cheesy Burger", true,true, "Grilled Potatoes");
var burger5 = new MenuItem("Black Bun Burger", false,true, "Potato Gratin");
var burger6 = new MenuItem("Black Bun Burger", false,true, "Potatoes and Aspargus");

var burgerlist = [burger1, burger2, burger3, burger4, burger5, burger6];

var myMenu = document.getElementById("myJSID");
var i = 0;
for (i; i< burgerlist.length; i++){
var item = burgerlist[i];
var listItem = document.createElement("li");
if (item.lactose == true || item.gluten == true ){
  var listValue = document.createTextNode(item.productName + " with " + item.sideOrder + " (contains gluten and/or lactose)");
 }
else {
  var listValue = document.createTextNode(item.productName + " with " + item.sideOrder);
}
listItem.appendChild(listValue);
myMenu.appendChild(listItem);
}
*/
//BUTTON FUNCTION
/*
function myFunction () {
  document.getElementById("myButtonID").innerHTML = "Button clicked - Order placed!"
  console.log("Button clicked - Order placed")
}
*/
