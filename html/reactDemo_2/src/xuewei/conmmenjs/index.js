
require("./css1.css");
var m1 = require("./m1");
var m2 = require("./m2");

console.log(m1);
console.log(m2);



if(module.hot){
	module.hot.accept();
}
