import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task.jsx';

export default class TaskList extends React.Component {
    render() {
        var taskNodes = this.props.data.map((task)=> {
            return(<Task task={task}/>);
        });
        return(
            <div className='taskList'>
                {taskNodes}
            </div>
        );
    }
}