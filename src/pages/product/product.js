import React from 'react';
import "./product.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProductsTable from "../../bootstrap/tableproducts";

const Product = () => {

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
        </div>
      </div>
    </div>
  );
};

export default Product;