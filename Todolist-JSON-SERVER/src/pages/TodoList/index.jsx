import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, ListGroup } from "react-bootstrap";

import {
  getTaskList,
  createTask,
  deleteTask,
  completeTask,
} from "../../redux/actions";

import "./styles.css";

function TodoList({
  todoList,
  getTaskList,
  createTask,
  deleteTask,
  completeTask,
}) {
  useEffect(() => {
    getTaskList();
  }, []);
  const [value, setValue] = useState();
  const handleCreateTask = () => {
    createTask({
      title: value,
      isDone: false,
    });
  };
  const handleDeleteTask = (deletedId) => {
    deleteTask({ id: deletedId });
  };
  const handleDeleteAll = () => {
    for (let i of todoList) {
      deleteTask({ id: i.id });
    }
  };
  const handleChangeValue = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  const handleCompleteTask = (completeItem) => {
    completeTask({
      id: completeItem.id,
      isDone: !completeItem.isDone,
    });
  };

  const renderTodoTaskList = () => {
    return todoList.map((item, itemIndex) => {
      return (
        <ListGroup.Item key={`todolist-${item.id}-${itemIndex}`}>
          <div className="todo-item-container">
            <p className={`ml-2 ${item.isDone === true && "done-task"}`}>
              {item.title}
            </p>
            <div className="todo-item-action">
              <Button
                variant="outline-primary"
                className="mr-2"
                onClick={() => handleCompleteTask(item)}
              >
                {item.isDone === false ? "Done" : "Undone"}
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => handleDeleteTask(item.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      );
    });
  };

  return (
    <div>
      <div className="todo-list-container">
        <div className="todo-list-content">
          <h4 className="text-center">Todo List</h4>
          <div className="todo-list-title">
            <form id="form">
              <div className="d-flex">
                <input
                  id="title"
                  className="form-control"
                  placeholder="Name"
                  onChange={(e) => handleChangeValue(e)}
                  style={{ width: 500 }}
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    handleCreateTask();
                    document.getElementById("form").reset();
                  }}
                >
                  Add Item
                </Button>
              </div>
            </form>
          </div>
          <div className="mt-2">
            <ListGroup>{renderTodoTaskList()}</ListGroup>
          </div>
          <div>
            {todoList.length > 0 && (
              <div className="text-center mt-2">
                <Button
                  variant="btn btn-outline-success"
                  onClick={() => handleDeleteAll()}
                >
                  Clear Item
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { todoList } = state.todoListReducer;
  return {
    todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTaskList: (params) => dispatch(getTaskList(params)),
    createTask: (params) => dispatch(createTask(params)),
    deleteTask: (params) => dispatch(deleteTask(params)),
    completeTask: (params) => dispatch(completeTask(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
