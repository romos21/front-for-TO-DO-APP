import React from 'react';
import {Router, Link, Route, Switch} from 'react-router-dom';
import shortId from 'shortid';
import '../styles/components/Tasks.css';

//components
import Task from "./Task";

//Axios Methods
import ClientServerConnection from "../ConnectionServer/ClientServerConnection";

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    description: 'Create FrontEnd',
                    status: 'done',
                    id: '1233',
                },
                {
                    description: 'Create BackEnd',
                    status: 'inProcess',
                    id: '3443434',
                },
                {
                    description: 'Get Diploma',
                    status: 'undone',
                    id: '123',
                },]
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.push = this.push.bind(this);
    }

    push(event) {
        const key = this.state.tasks.find(key => key.description === event.target.textContent)
        this.props.history.push('/task/' + key.id);
    }

    async deleteTask() {
        const taskForRemove = document.getElementById('task');
        console.log(taskForRemove);
        /* Это можешь удалять

        const filterState=this.state.tasks.filter(task=>task.description!==taskForRemove.textContent);
        console.log(filterState);
        this.setState({
            tasks:filterState,
        });*/


        /* Раскомменти это!!!
        const response=await ClientServerConnection.deleteTask(taskForRemove.id);
        this.setState({
            tasks:response.data,
        });*/
    }

    /* Раскомменти это!!!
    async componentDidMount() {
        const response=await ClientServerConnection.taskGetAll();
        this.setState({
            ...response,
        })
    }*/

    render() {
        let i = 0;
        return (
            this.state.tasks.map(task => {
                i++;
                return (
                    <div className='taskBody' key={shortId.generate()}>
                        <span className='taskNumber'>{i}</span>
                        <a id='task'
                           href='#'
                           onClick={window.location.pathname==='/task/'+task.id?null:this.push}
                           className='description'>{task.description}</a>
                        <Router history={this.props.history}>
                        </Router>
                        <span className={task.status}>{task.status}</span>
                        <span
                            className='deleteTask'
                            onClick={this.deleteTask}
                        >
                            X
                        </span>
                    </div>
                )
            })

        )
    }
}

export default Tasks;