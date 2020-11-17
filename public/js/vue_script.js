import {getInputText} from '../js/js_script.js';

var vm = new Vue({
  el: '#bigID',
  data: {
    burgers: burger,
    },
  methods: {
    getInputText: function() {
    console.log(getInputText()[6])
    if (getInputText()[6] !== undefined) {
        textOrderInfo.textContent = "Ordered burger: " + getInputText()[6]
        + ". Your contact info:  "
        + getInputText()[0]
        + ", " + getInputText()[1]
        + ", " + getInputText()[2]
        + " " + getInputText()[3]
        + ", " + getInputText()[4]
        + ", " + getInputText()[5]
      }
    else {
      textOrderInfo.textContent = "Your contact info: "
      + getInputText()[0]
      + ", " + getInputText()[1]
      + ", " + getInputText()[2]
      + " " + getInputText()[3]
      + ", " + getInputText()[4]
      + ", " + getInputText()[5]

    }
    }
  }
})
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
