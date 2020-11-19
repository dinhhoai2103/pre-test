import React from "react";
import history from "../../util/history";
import "./styles.css";

function List(props) {
  const { userList } = props;
  const renderItems = () => {
    return userList.map((item, index) => {
      return (
        <div
          className="col-3 mb-2"
          key={`user-${item.id}-${index}`}
          onClick={() => history.push(`/users/${item.id}`)}
        >
          <div className="item">
            <div style={{ height: 120 }}></div>

            <div className="p-2">{item.name}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="list">
      <div className="list-content">
        <h3>List User</h3>
        <div className="row">{renderItems()}</div>
      </div>
    </div>
  );
}

export default List;
