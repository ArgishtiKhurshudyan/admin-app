import React, {useState} from 'react';
import './setting.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProductModal from "../../components/settingsconfiguration/ProductSetting";
import ColorSetting from "../../components/settingsconfiguration/ColorSetting";


const Setting = () => {
  // const [prod, setProd] = useState({
  //   product: false,
  //   color: false
  // })
  //
  // const handleChange = (field, value) => {
  //   setProd(prevState => ({
  //     ...prevState,
  //     [field]: value
  //   }))
  // }
  //
  // return (
  //   <div className="setting">
  //     <Sidebar/>
  //     <div className="setting-container">
  //
  //       <Navbar/>  <div className="header">
  //         <button onClick={() => handleChange('product', !prod.product)}>product</button>
  //         <button onClick={() => handleChange('color', !prod.color)}>color</button>
  //       </div>
  //       <>
  //         {
  //           prod.product ? <ProductModal/> : prod.color ? <ColorSetting/> : <></>
  //         }
  //       </>
  //     </div>
  //
  //   </div>
  // );
};

export default Setting;