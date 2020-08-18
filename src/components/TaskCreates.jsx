import React from 'react';
import '../styles/components/TaskCreates.css';

//Axios
import ClientServerConnection from "../ConnectionServer/ClientServerConnection";

const TaskCreates = () => {

    async function taskCreate(){
        const response=await ClientServerConnection.addTask({
            description:document.getElementById('description').textContent,
            status:document.getElementById('status').textContent,
        });
        console.log(response.data);
    }

    return (
        <div>
            <h1>CREATE NEW TASK!</h1>
            <form className='taskCreatesBody'>
                <input id='description' type='text' className='description'/>
                <input id='status' type='text' className='status'/>
                <span className='addTask'
                      onClick={taskCreate}
                >+
                </span>
            </form>
        </div>
    )
};


export default TaskCreates;