import React from 'react'
import { useState } from 'react'

function Input() {
    const [task,setTask] = useState("")
    const [tasks,setTasks] = useState(["try creating a task","the tasks will be shown here"])
    const onClick=()=>{
        setTasks([...tasks,task])
        setTask("")
        localStorage.setItem("tasks",tasks)
    }
    return (
        <div>
            <input id="task" type="text" placeholder="Enter the Task here" value={task} onChange={e=>{setTask(e.target.value)
            }}></input>
            <button onClick={onClick}>Add</button>
            <ul>
                {tasks.map((t,index)=>{
                    return <li key={index}>{t}</li>
                })}
            </ul>
        </div>
    )
}

export default Input
