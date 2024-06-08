import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks] = useState(["Take a bath" , "Do Exercise", "Go for walk"]);
    const [newTask,setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
        }
        setNewTask("");
    }

    function handleDeleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const copyTasks = [...tasks];

            const temp = copyTasks[index];
            copyTasks[index] = copyTasks[index-1];
            copyTasks[index-1] = temp;

            setTasks(t => copyTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const copyTasks = [...tasks];

            const temp = copyTasks[index];
            copyTasks[index] = copyTasks[index+1];
            copyTasks[index+1] = temp;
            
            setTasks(t => copyTasks);
        }
    }

    return (
        <div className="to-do-container">
            <h1> TO DO LIST </h1>
            <div>
                <input value={newTask} onChange={handleInputChange}></input>
                <button onClick={handleAddTask} className="add-button">Add</button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        {task}
                        <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>UP</button>
                        <button onClick={() => moveTaskDown(index)}>DOWN</button>
                    </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;