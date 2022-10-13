import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Setting = () => {
  return (
    <div className="setting">
      <Sidebar/>
      <div className="setting-container">
        <Navbar/>
      </div>
    </div>
  );
};

export default Setting;