var print = require("./modules/print");
import Dog from 'babel-loader!./modules/Dog';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from 'babel-loader!./modules/CommentBox.jsx';
require('style-loader!css-loader!stylus-loader!./assets/style/style.styl');


print("Hello webpack");

var d = new Dog('John');
console.log(d.eat('beef'));


var data = [
    {author: 'aaaaaPete Hunt', text: 'fffffThis is one comment'},
    {author: 'Jordan Walke', text: 'This is *another* comment'}
]

  ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('container')
  );