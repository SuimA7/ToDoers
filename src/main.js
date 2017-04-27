var print = require("./modules/print");
import Dog from 'babel-loader!./modules/Dog';
import React from 'react';
import ReactDom from 'react-dom';
require('style-loader!css-loader!stylus-loader!./assets/style/style.styl');


print("Hello webpack");

var d = new Dog('John');
console.log(d.eat('beef'));

// class CommentBox extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div className='commentBox'>
//         Hello, world! I am a CommentBox.
//       </div>
//     );
//   }
// }

// React.render(
//   <CommentBox />,
//   document.getElementById('container')
// );

// const ReactDOM = require('react-dom')

const App = () => <div>Hello, world!</div>

ReactDOM.render(<App />, document.querySelector('#container'))