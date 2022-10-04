import React from 'react';
import "./profile.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableProfile from "../../bootstrap/Table";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Profile = () => {
  return (
    <div className="profile">
      <Sidebar/>
      <div className="profile-container">
        <Navbar/>
   <span style={{color:"#7451f8"}}>Profile</span>
        <div className="profile-img">
          <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSztEHGDHsSIlKxW_dc1sltM6CBxFNT7ocBQ&usqp=CAU"/>
          <span>Alexandr Xachatryan</span>
        </div>
        <hr/>
        <div className="table-profile">
          <TableProfile/>
          <div className="social">
            <h2>social pages </h2>
            <div className="pages">
              <span><FacebookIcon/></span>
              <span><InstagramIcon/></span>
              <span><TwitterIcon/></span>
            </div>

          </div>
        </div>
        <div className="bottom-div">s</div>
      </div>
    </div>
  );
};

export default Profile;