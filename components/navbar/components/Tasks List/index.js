"use client";

import { useRouter } from "next/navigation";

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
  
    const addTask = () => {
      if (taskInput.trim() !== '') {
        setTasks([...tasks, taskInput]);
        setTaskInput('');
      }
    };
  
    const deleteTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h1>Task List</h1>
  
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addTask}>Add Task</button>
  
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }