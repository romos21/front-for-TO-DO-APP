import React from 'react';
import {Router, Route,Link} from 'react-router-dom';
import {useHistory} from "react-router";
import '../styles/components/Wrapper.css';

//components
import App from "./App";
import UserPage from "./UserPage";
import Tasks from "./Tasks";
import TaskCreates from "./TaskCreates";
import Task from "./Task";


const Wrapper=()=>{

    const history = useHistory();

    return (
        <div>
            <div className="backgroundImg"/>
            <div className="backgroundFixed"/>
            <Router history={history}>
                <Route exact path='/'>
                    <App/>
                </Route>
                <Route exact path='/taskCreates'>
                    <TaskCreates/>
                </Route>
                <Route path='/taskPage'>
                    <Tasks history={history}/>
                </Route>
                <Route path='/task/:id'>
                    <Task/>
                </Route>
                <Route path='/userPage'>
                    <h1>UserPage</h1>
                    <UserPage/>
                    <br/>
                    <button className='userPageActions red'>Delete</button>
                    <Link to="/taskCreates" className='userPageActions green'>Add Task</Link>
                    <Link to="/taskPage" className='userPageActions blue'>Tasks</Link>
                    <Link to="/addRoom" className='userPageActions blue'>Add Room</Link>
                </Route>
            </Router>
        </div>
    );
}

export default Wrapper;
