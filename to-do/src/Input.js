import React from 'react'
import { useState } from 'react'
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



function Input() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [task,setTask] = useState("")
    const [tasks,setTasks] = useState(["try creating a task","the tasks will be shown here"])
    const onClick=()=>{
        setTasks([...tasks,task])
        setTask("")
        localStorage.setItem("tasks",tasks)
    }
    return (
        <div>
            <input id="task" type="text" placeholder="Enter the Task here" style={{height:"2em"}} value={task} onChange={e=>{setTask(e.target.value)
            }} className={`input ${darkMode ? "input-dark" : "input-light"}`}></input>
            <button style={{"margin":"10px",borderRadius:"10%",border:"none",height:"2em"}} onClick={onClick} className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}>Add</button>
            <ul style={{marginLeft:"auto",marginRight:"auto",textAlign:"left",display:"table"}} className={`ul ${darkMode ? "ul-dark" : "ul-light"}`}>
                {tasks.map((t,index)=>{
                    return <li key={index}>{t}</li>
                })}
            </ul>
        </div>
    )
}

export default Input
