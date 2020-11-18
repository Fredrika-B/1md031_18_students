/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#orders',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this)); //app.js skickar hit info, typ rad 55
    // .bind(this) vad är detta? adding a bind to a function,
    //vi säger åt att det är this från utsidan, inherite från vue

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  }
});
