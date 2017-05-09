import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList.jsx';
import TaskForm from './TaskForm.jsx';
import $ from 'jquery';

export default class TaskBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
    }

    loadTasksFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => { this.setState({data: data}); },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    handleTaskSubmit( task ) {
        var tasks = this.state.data;
        var newtasks = tasks.concat([task]);
        this.setState({data: newtasks});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: task,
            success: (data) => { this.setState({data:data})},
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        })
    }

    componentDidMount() {
        this.loadTasksFromServer();
        setInterval(this.loadTasksFromServer.bind(this), this.props.pollInterval);
    }

    render() {
        return(
            <div className='taskBox'>
            <h2>Tasks</h2>
            <TaskList data={this.state.data}/>
            <TaskForm onTaskSubmit={this.handleTaskSubmit.bind(this)} />
            </div>
            );
    }
}