import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import './home.scss'
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="home-container">
        <Navbar/>
        <span style={{color:"#7451f8"}}>Dashboard</span>
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
          </div>
      </div>
    </div>
  );
};

export default Home;