import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "../App.css";

export default class TaskForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={this.props.handleSubmit} className="form-container">
          <Form.Group className="mb-3">
            <Form.Control
              autoFocus
              type="text"
              name="title"
              value={this.props.title}
              onChange={this.props.handleChange}
              placeholder="Enter Task Title"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="description"
              value={this.props.description}
              onChange={this.props.handleChange}
              placeholder="Enter Task Description"
            />
          </Form.Group>
          <button
            className="button"
            type="submit"
            style={{ alignSelf: "start" }}
          >
            Add Task
          </button>
        </Form>
      </div>
    );
  }
}
