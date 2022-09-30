import React, {useState} from 'react';
import './setting.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Link} from "react-router-dom";
import Product from "../product/product";
import ProductModal from "../../components/settingsconfiguration/ProductSetting";
import Color from "../color/color";
import ColorSetting from "../../components/settingsconfiguration/ColorSetting";

const Setting = () => {
  const [prod, setProd] = useState(false)
  const [color, setColor] = useState(false)

  return (
    <div className="setting">
      <Sidebar/>
      <div className="setting-container">
        <Navbar/>
        <div className="header">
          <button onClick={() => setProd(!prod)}>product</button>
          <button onClick={() => setColor(!color)}>color</button>
        </div>
        <>
          {
            prod ?  <ProductModal/> : color ? <ColorSetting/> : <></>
          }
        </>
      </div>
    </div>
  );
};

export default Setting;