import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Pagination } from "react-bootstrap";
import "./styles.css";
import { getComment } from "../../redux/actions";
function Comment({ getComment, comment }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getComment({
      page: page,
    });
  }, [page]);
  const renderItems = () => {
    return comment.map((item, index) => {
      return (
        <div
          className="col-2 m-2 border border-blue"
          key={`comment-${item.id}-${index}`}
        >
          <p>Name: {item.name}</p>
          <p>Comment: {item.comment}</p>
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
        <h3>Comment</h3>
        <div className="row">{renderItems()}</div>
      </div>
      <div className="d-flex justify-content-center">
        <Pagination size="sm">{items}</Pagination>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { comment } = state.userListReducer;
  return {
    comment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getComment: (params) => dispatch(getComment(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
