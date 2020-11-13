

function MenuItem(pname, aller, sorder) {
    this.productName = pname;
    this.allergies = aller;
    this.sideOrder = sorder;
    this.info = function() {
      return this.productName + " " + this.sideOrder;
    }
  }


var order = new MenuItem("Chili Dream", "Gluten, Egg", "French Fries" )
console.log(order.info() );

var order2 = new MenuItem("Black Bun Burger", "Gluten", "Potato Gratin")
console.log(order2.info() );


function MenuItem(pname, aller, sorder) {
    this.productName = pname;
    this.allergies = aller;
    this.sideOrder = sorder;
    this.info = function(){
      return this.productName + " " + "with " + this.sideOrder;
    }
  }

var burger1 = new MenuItem("Black Bun Burger", "Gluten", "Potato Gratin");
var burger2 = new MenuItem("Chili Dream", "Gluten, Egg", "French Fries" );
var burger3 = new MenuItem("Cheesy Burger", "Gluten, Lactose", "Cheesegratinated French Fries");

var burgerlist = [burger1, burger2, burger3]

var vm = new Vue({
  el: '#myID',
  data: {
		menuItems: [burger1, burger2, burger3]
} 
})
