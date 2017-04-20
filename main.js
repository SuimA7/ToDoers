var print = require("./print");
import Dog from 'babel-loader!./Dog';

print("Hello webpack");

console.log(Dog.constructor);
console.log(Dog.eat);

var d = new Dog('John');
console.log(d.eat('beef'));