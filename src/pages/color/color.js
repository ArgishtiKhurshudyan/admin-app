import React, {useEffect} from 'react';
import "./color.scss"
import {useDispatch, useSelector} from "react-redux";
import {
  getColorStart
} from "../../redux/color/actions";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Color = () => {
  const {colorData} = useSelector(state => state.color)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getColorStart())
  }, [dispatch])

  return (
    <div className="color">
      <Sidebar/>
      <div className="color-container">
        <Navbar/>
        <h1>Colors</h1>
        <div className="color-container">
          <div className="colors">
            {colorData?.map((item) =>
              <div className="item" key={item.id} >
                <div className="color-title-div"  style={{backgroundColor:item.colorName}}>
                  <h1>&nbsp;&nbsp;{item.colorName}</h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Color;
