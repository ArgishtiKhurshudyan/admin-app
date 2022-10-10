import React from 'react';
import "./color.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ColorsTable from "../../bootstrap/tablecolors";
import QueueIcon from '@mui/icons-material/Queue';
import {useNavigate} from "react-router-dom";
const Color = () => {

const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/color-add`)
  }
  return (
    <div className="color">
      <Sidebar/>
      <div className="color-container">
        <Navbar/>
        <div className="create-container">
          <div className="colors">
            <ColorsTable/>
          </div>
          <button className='addBtn' onClick={handleClick}><QueueIcon/> Add</button>
        </div>
      </div>
    </div>
  );
};

export default Color;
