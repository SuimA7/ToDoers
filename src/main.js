var print = require("./modules/print");
import Dog from 'babel-loader!./modules/Dog';
require('style-loader!css-loader!stylus-loader!./assets/style/style.styl');

print("Hello webpack");

var d = new Dog('John');
console.log(d.eat('beef'));