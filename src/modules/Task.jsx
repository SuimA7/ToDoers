import Marked from 'marked';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Task extends React.Component {
    render() {
        return(
            <div className='task'>
                <h3 className='title'>
                    {this.props.task.title}
                </h3>
                <p className='project'>
                    {this.props.task.project}
                </p>
                <p className='detail'>
                    {this.props.task.detail}
                </p>
                <p className='status'>
                    {this.props.task.status}
                </p>
                <p className='due'>
                    {this.props.task.due}
                </p>
            </div>
        );
    }
}