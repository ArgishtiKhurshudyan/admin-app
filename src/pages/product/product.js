import React from 'react';
import "./product.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductsTable from "../../bootstrap/tableproducts";
import QueueIcon from "@mui/icons-material/Queue";
import {useNavigate} from "react-router-dom";

const Product = () => {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/product-add`)
  }
  return (
    <div className="product">
      <Sidebar/>
      <div className="product-container">
        <Navbar/>
        <span style={{color: "#7451f8"}}>Products</span>
        <div className="create-product">
          <div className="product-table">
            <ProductsTable/>
          </div>
          <button className='addBtn' onClick={handleClick}><QueueIcon/> Add</button>
        </div>
      </div>
    </div>
  );
};

export default Product;