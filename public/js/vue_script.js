import {getInputText} from '../js/js_script.js';
import {getOrder} from '../js/js_script.js';

'use strict';
var socket = io();

var vm = new Vue({
  el: '#bigID',
  data: {
    burgers: burger,
    orders: {},
    karta: {details: {x:0, y:0}},
    orderStatus: "PLACE MY ORDER",
    contactText: "",
    contactOrder:"",
    summaryText: "",
    deliverTo:""
    },
  methods: {
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.karta = {details: { x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y }};
     },

    addOrder: function (event) {
      this.orderStatus = "ORDER SENT!";
      this.contactText =  "Your contact info: " + getInputText() ;
      this.contactOrder = "You have ordered: " + getOrder();
      this.summaryText = "Order summary:" ;
      var numberX = this.karta.details.x; var roundedX = Math.round(numberX * 10) / 10;
      var numberY = this.karta.details.y; var roundedY = Math.round(numberY * 10) / 10;
      this.deliverTo = "Deliver to: " + roundedX +" x / "+ roundedY + " y";

      socket.emit("addOrder", { orderId: "Item "+ Math.floor(Math.random()*(1000-1+1)+1),
                          details: this.karta.details,
                          orderItems: getOrder(),
                          personInfo: getInputText()[0] + getInputText()[1] + getInputText()[2] + getInputText()[3]   } );
      }
  }
})


//SOME OF MY OLD FUNCTIONS:
/* OLD FUNCTION FOR DISPLAYING ORDER, A PART OF VUE OBJECT
getInputText: function() {
//console.log(getInputText()[4])
if (getInputText()[4] !== undefined) {
    textOrderInfo.textContent = "Ordered burger: " + getInputText()[4]
    + ". Your contact info:  "
    + getInputText()[0]
    + ", " + getInputText()[1]
    + ", " + getInputText()[2]
    + ", " + getInputText()[3]
  }
else {
  textOrderInfo.textContent = "Your contact info: "
  + getInputText()[0]
  + ", " + getInputText()[1]
  + ", " + getInputText()[2]
  + ", " + getInputText()[3]
*/


/*
var vclick = new Vue({
  el: "#orders",
  methods: {
    getInputText: function() {
    textOrderInfo.textContent = getInputText();
    console.log("Button Clicked")
    console.log(getInputText());
    }
  }
})
*/

/*
// OLD VUE OBJECT TO CREATE HAMBURGERS
var vm = new Vue({
 el: '#myVueID',
 data: {
 burgers:[
   new Burger("The Chili Dream", false, false, "French Fries", "https://brands-a.prod.onewp.net/app/uploads/sites/26/2018/05/ro%CC%88kig-burgare-med-karamelliserad-lo%CC%88k.jpg"),
   new Burger("Halloumi Burger", true, true, "Chili Potatoes", "https://imgs.aftonbladet-cdn.se/v2/images/8f099010-ca16-487d-82d1-6abcbfc1c18f?fit=crop&h=614&q=50&w=1000&s=96b293b3dc92346ac4715dd64b6faed62b0968d4"),
   new Burger("The Cheesy Burger", true,true, "Cheesegratinated French Fries", "https://www.burgerdudes.se/wp-content/uploads/2019/07/burger_mansion_home_sweet_home_med.jpg"),
   new Burger("Hot & Spicy Burger", true,true, "Grilled Potatoes","https://amazingribs.com/files/styles/content_body_600px/public/heroimage/jalapeno-bacon-cheeseburger.jpg?itok=MzDkX1uW"),
   new Burger("Black Bun Burger", false,true, "Potato Gratin","https://recipecontent.fooby.ch/13700_3-2_480-320.jpg")
  ]},
})*/
