import React, { Component } from "react";
import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";
import Row from "react-bootstrap/Row";
import "./App.css";

export default class App extends Component {
  state = {
    title: "",
    description: "",
    todos: [],
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { todos, title, description } = this.state;
    const task = [
      ...todos,
      { title, description, id: Date.now(), isCompleted: false },
    ];

    if (title.trim() !== "" && description.trim() !== "") {
      localStorage.setItem("todos", JSON.stringify(task));
      this.setState({
        todos: task,
        title: "",
        description: "",
      });
    }
  };

  componentDidMount() {
    const localStorageList = JSON.parse(localStorage.getItem("todos"));

    if (!localStorageList) {
      return [];
    } else {
      this.setState({ todos: localStorageList });
    }
  }

  handleDelete = (itemId) => {
    const filtered = this.state.todos.filter((task) => task.id !== itemId);
    localStorage.setItem("todos", JSON.stringify(filtered));

    this.setState({
      todos: filtered,
    });
  };

  handleTaskStatus = (index) => {
    this.setState((state) => ({
      todos: state.todos.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        } else {
          return item;
        }
      }),
    }));
  };

  render() {
    return (
      <div className="task-container">
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "3rem",
            fontWeight: "bolder",
          }}
        >
          TODO LIST
        </Row>

        <TaskForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          description={this.state.description}
        />
        <TaskList
          handleTaskStatus={this.handleTaskStatus}
          handleDelete={this.handleDelete}
          state={this.state}
        />
      </div>
    );
  }
}
