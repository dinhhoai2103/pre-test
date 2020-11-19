import React from 'react';
import history from "../../util/history";
import './styles.css';

function Header() {

  return (
    <div className="header ">
      
      <div className="header-menu">
      <div className="menu-item" onClick={() => history.push('/')}>Home</div> 
        <div className="menu-item" onClick={() => history.push('/photo')}>Photo</div>
        <div className="menu-item" onClick={() => history.push('/todo')}>Todo</div>
        <div className="menu-item" onClick={() => history.push('/comment')}>Comment</div>
      </div>

    </div>
  );
}

export default Header;
