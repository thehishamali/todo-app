import { Button } from "react-bootstrap";
import {useState} from "react";

function ToDo() {
    const[tasks, setTasks] = useState([]);
    const[entries, setEntries] = useState("");

    function addTask() {
        setTasks([...tasks, entries]);
        setEntries("");
    }

    function deleteTask(index) {
        setTasks(tasks.filter((t, i) => i !== index ))
    }

    return(
        <>
            <input type = "text" value = {entries} onChange={(e) => setEntries(e.target.value)} />
            <Button variant = "info" onClick = {addTask}>Add</Button>
            <ul>
                {tasks.map((task, i) => <li key = {i}>{task} <Button variant = "danger" onClick = {() => deleteTask(i)}>Delete</Button></li>)}
            </ul>
        </>
    );
}

export default ToDo;