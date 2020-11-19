import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import "./styles.css";
import { getTodo, changeStatus } from "../../redux/actions";
function Todo({ getTodo, todoList, changeStatus }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTodo({
      page: page,
    });
  }, [page]);
  const handleChangeStatus = (item) => {
    changeStatus({
      id: item.id,
      isDone: !item.isDone,
    });
  };
  const renderItems = () => {
    return todoList.map((item, index) => {
      return (
        <div
          className="col-2 m-2 border border-primary"
          key={`todo-${item.id}-${index}`}
        >
          <p>Name job: {item.name}</p>
          <p>Status: {item.isDone === false ? "Unfinished" : "Finish"} </p>
          <button
            className="btn btn-success mb-2"
            onClick={() => handleChangeStatus(item)}
          >
            {item.isDone === false ? "Done" : "Undone"}
          </button>
        </div>
      );
    });
  };

  let active;
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="list">
      <div className="list-content">
        <h3>TodoList</h3>
        <div className="row">{renderItems()}</div>
      </div>
      <div className="d-flex justify-content-center">
        <Pagination size="sm">{items}</Pagination>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { todoList } = state.userListReducer;
  return {
    todoList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodo: (params) => dispatch(getTodo(params)),
    changeStatus: (params) => dispatch(changeStatus(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
