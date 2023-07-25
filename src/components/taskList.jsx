import React, { Component } from "react";
import "../App.css";

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <div className="task-list-container">
          {this.props.state.todos.length === 0 && (
            <h3>Please Create A New Task</h3>
          )}
          <ul className="task-list">
            {this.props.state.todos.map((list) => (
              <li
                onClick={this.props.handleTaskStatus}
                key={list.id}
                id={list.id}
                className="task-list"
                style={{
                  opacity: list.isCompleted ? "0.5" : "",
                }}
              >
                <div className="task-header">
                  <span
                    style={{
                      textDecoration: list.isCompleted ? "line-through" : "",
                    }}
                  >
                    {list.title}
                  </span>
                  <button
                    className="button"
                    key={list.id}
                    id={list.id}
                    onClick={() => this.props.handleTaskStatus(list.id)}
                    style={{
                      backgroundColor: "skyblue",
                    }}
                  >
                    {list.isCompleted ? "Done" : "Pending"}
                  </button>
                </div>
                <div className="task-body">
                  <span
                    style={{
                      textDecoration: list.isCompleted ? "line-through" : "",
                    }}
                  >
                    {list.description}
                  </span>
                  <button
                    className="button"
                    onClick={() => this.props.handleDelete(list.id)}
                    style={{
                      backgroundColor: "red",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
