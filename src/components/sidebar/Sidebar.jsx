import React, {useEffect, useState} from 'react';
import './sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";

const Sidebar = () => {
  const [dialog, setDialog] = useState({
    message: "Are you sure?",
    yesConfirm: false,
    notConfirm: false
  })
  const [click, setClick] = useState(false)

  const style = {
    textDecoration: "none"
  }
  useEffect(() => {
    if (dialog.yesConfirm) {
      localStorage.removeItem("access_token")
      window.location.replace('/login')
    } else {
      setClick(false)
    }
  }, [dialog])

  const handleConfirm = (field, value) => {
    setDialog(prevState => ({
      ...prevState,
      [field]: value
    }))
  }
  const handleClick = () => {
    setClick(true)
  }

  return (
    <div className='sidebar-container'>
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

          {click && <li>
            <span>{dialog.message}</span>
            <div className="btn">
              <button key={1} onClick={(e) => handleConfirm('yesConfirm', !dialog.yesConfirm)}>Yes</button>
              <button key={2} onClick={(e) => handleConfirm('notConfirm', dialog.notConfirm)}>No</button>
            </div>
          </li>}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;