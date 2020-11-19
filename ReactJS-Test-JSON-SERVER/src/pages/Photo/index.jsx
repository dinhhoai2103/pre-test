import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-bootstrap";
import "./styles.css";
import { getPhoto } from "../../redux/actions";
function Photo({ getPhoto, listPhoto }) {
  useEffect(() => {
    getPhoto();
  }, []);
  const renderItems = () => {
    return listPhoto.map((item, index) => {
      return (
        <Carousel.Item key={`photo-${item.id}-${index}`}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
        </Carousel.Item>
      );
    });
  };

  return (
    <div className="list">
      <div className="list-content">
        <h3>Photo</h3>
        <Carousel>{renderItems()}</Carousel>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { listPhoto } = state.userListReducer;
  return {
    listPhoto,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: (params) => dispatch(getPhoto(params)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
