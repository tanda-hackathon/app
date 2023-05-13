import React from 'react';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskInput: ''
    };
  }

  addTask = () => {
    const { taskInput, tasks } = this.state;
    if (taskInput.trim() !== '') {
      this.setState({
        tasks: [...tasks, taskInput],
        taskInput: ''
      });
    }
  };

  deleteTask = (index) => {
    const { tasks } = this.state;
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    this.setState({
      tasks: updatedTasks
    });
  };

  handleTaskInputChange = (e) => {
    this.setState({
      taskInput: e.target.value
    });
  };

  render() {
    const { tasks, taskInput } = this.state;

    return (
      <div>
        <h1>Task List</h1>

        <input
          type="text"
          value={taskInput}
          onChange={this.handleTaskInputChange}
          placeholder="Enter task"
        />
        <button onClick={this.addTask}>Add Task</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;