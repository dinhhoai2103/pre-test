import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./styles.css";
import { getUserData } from "../../redux/actions";

function User({ match, getUserData, userData }) {
  useEffect(() => {
    getUserData({
      id: match.params.id,
    });
  }, [match.params.id]);

  const renderNumberPhoto = () => {
    return userData.map((item) => {
      return item.image.length;
    });
  };

  const renderUserData = () => {
    return userData.map((item, index) => {
      return (
        <div className="m-3" key={`userData-${item.id}-${index}`}>
          <p>Name: {item.name}</p>
          <p>Photo : {renderNumberPhoto()}</p>
        </div>
      );
    });
  };

  return <div className="user">{renderUserData()}</div>;
}
const mapStateToProps = (state) => {
  const { userData } = state.userListReducer;
  return {
    userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (params) => dispatch(getUserData(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(User);
