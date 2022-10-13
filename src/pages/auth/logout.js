import React, {useEffect} from 'react';
import "./style.scss"

const Logout = () => {
  const handleClick = () => {
    localStorage.removeItem("access_token")
    window.location.replace('/')
  }

  return (
    <div className="logout-container">
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default Logout;