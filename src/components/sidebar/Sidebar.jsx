import React from 'react';
import './sidebar.scss'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, useNavigate} from "react-router-dom";

const Sidebar = () => {
  const style = {
    textDecoration: "none"
  }
  const navigate = useNavigate()

  const handleClick = () => {
    localStorage.removeItem("access_token")
    window.location.replace('/')
  }


  return (
    <div className='sidebar-container'>
      {/*<div className="menu-icon"></div>*/}
      <div className="center">

        <ul>
          <div className="title">
            <h2>User name</h2>
          </div>
          <Link to="/" style={style}>
            <li>
              <HomeIcon className="icon"/>
              <span>Home</span>
            </li>
          </Link>
          <Link to="/profile" style={style}>
            <li>
              <PersonIcon className="icon"/>
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <Link to="/products" style={style}>
              <InventoryOutlinedIcon className="icon"/>
              <span>Products</span>
            </Link>
          </li>

          <li>
            <Link to="/colors" style={style}>
              <ColorLensIcon className="icon"/>
              <span>Colors</span>
            </Link>
          </li>
          <li>
            <Link to="/settings" style={style}>
              <SettingsIcon className="icon"/>
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" style={style}>
              <ContactPageIcon className="icon"/>
              <span>Contact us</span>
            </Link>
          </li>
          <li>
            <LogoutIcon className="icon"/>
            <span onClick={handleClick}>Log out</span>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;