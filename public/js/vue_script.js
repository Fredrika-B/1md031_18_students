import {getInputText} from '../js/js_script.js';

'use strict';
var socket = io();

var vm = new Vue({
  el: '#bigID',
  data: {
    burgers: burger,
    orders: {},
    karta: {details: {x:0, y:0}}
    },
  methods: {
    displayOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.karta = {details: { x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y }};
     },
    addOrder: function (event) {
      socket.emit("addOrder", { orderId: "T",
                                details: this.karta,
                                orderItems: [getInputText()[4]] } )
      console.log("hej" + getInputText()[4])
      console.log(this.karta)

      },
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
    }
    }
  }
})

/*
//var order = {};
'use strict';
let socket = io();

var vm = new Vue({
   el: '#dots',
   data: {
     orders: {}
   },
   created: function () {
     socket.on('initialize', function (data) {
       this.orders = data.orders;
     }.bind(this));

     socket.on('currentQueue', function (data) {
       this.orders = data.orders;
     }.bind(this));
   },
   methods: {
     getNext: function () {
       var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
         return Math.max(last, next);
       }, 0);
       return lastOrder + 1;
     },
     addOrder: function (event) {
/*
         var offset = {x: event.currentTarget.getBoundingClientRect().left,
                       y: event.currentTarget.getBoundingClientRect().top};
         socket.emit("addOrder", { orderId: this.getNext(),
                                   details: { x: event.clientX - 100 - offset.x,
                                              y: event.clientY - 1500 - offset.y },
                                   orderItems: ["Beans", "Curry"]
*//*
       socket.emit("addOrder", { orderId: this.getNext(),
                                 details: { x: event.clientX-100 - event.currentTarget.getBoundingClientRect().left,
                                            y: event.clientY-1000 - event.currentTarget.getBoundingClientRect().top},
                                 orderItems: ["Beans", "Curry"]
                               });
     }
   }
 });


*/
/*
var cm = new Vue({
  el: '#contactID',
  methods: {
    getInputTexts: function() {
    //  import {getInputText} from 'js/js_script.js';
      console.log(inputArray);
    }
  }
})
*/
//let getInputText = required('../functions/getInputText');
//console.log(getInputText);
//var inputArray = getInputText();
//console.log(inputArray);
/*
var vclick = new Vue({
  el: "#orders",

  methods: {
    getInputText: function() {
    //  import {getInputText} from 'js/js_script.js';
    textOrderInfo.textContent = getInputText();
    console.log("Button Clicked")
    console.log(getInputText());

    }

  }
})

*/

/*
function Burger(pname, lactose, gluten, sorder, img) {
 this.productName = pname;
 this.lactose = lactose;
 this.gluten = gluten;
 this.sideOrder = sorder;
 this.image = img;
}

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
