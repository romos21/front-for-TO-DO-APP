import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router';
import '../styles/components/Task.css';

//Axios
import ClientServerConnection from "../ConnectionServer/ClientServerConnection";

function Task() {
    const params = useParams();

    useEffect(async ()=> {
        console.log(params.id);
        const response = await ClientServerConnection.getTask(params.id);
        console.log(response.data);
        taskChange(response.data);
    });

    async function taskEdit(){
        const response = await ClientServerConnection.editTask({
            id:params.id,
            description:document.getElementById('description').textContent,
            status:document.getElementById('status').textContent,
        });
        console.log(response.data);
        taskChange(response.data);
    }

    const [task,taskChange]=useState({});
    return (
        <div>
            <h1>Personal TASK page</h1>
            <form className='taskCreatesBody'>
                <input id='description' type='text' className='description' placeholder={task.description}/>
                <input id='status' type='text' className='status' placeholder={task.status}/>
                <span className='changeTask'
                      onClick={taskEdit}
                >Change
                </span>
            </form>
        </div>
    )

}


export default Task;