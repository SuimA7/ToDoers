import React from 'react';
import ReactDOM from 'react-dom';
import TaskBox from 'babel-loader!./modules/TaskBox.jsx';
require('style-loader!css-loader!stylus-loader!./assets/style/style.styl');

ReactDOM.render(
    <TaskBox url="/tasks.json" pollInterval={2000} />,
    document.getElementById('container')
);
