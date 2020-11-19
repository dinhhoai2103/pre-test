import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import List from "../List";
import { Pagination } from "react-bootstrap";
import history from "../../util/history";
import "./styles.css";
import { getUserList } from "../../redux/actions";
function Home({ getUserList, userList }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUserList({
      page: page,
    });
  }, [page]);

  let active;
  let items = [];
  for (let number = 1; number <= 2; number++) {
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
    <>
      <div className="main">
        <List userList={userList} />
      </div>
      <div className="d-flex justify-content-center">
        <Pagination size="sm">{items}</Pagination>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const { userList } = state.userListReducer;
  return {
    userList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserList: (params) => dispatch(getUserList(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
