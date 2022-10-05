import React, {useRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {
  colorCreateSuccess,
  colorStartCreate,
} from "../../redux/color/actions";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const AddColor = () => {
  const colorName = useRef()
  const [err, setErr] = useState(false)
  const dispatch = useDispatch()

  const handleCreateColor = () => {
    let color = {
      colorName: colorName.current.value
    }
    if (colorName.current.value) {
      dispatch(colorStartCreate({color}))
      if (colorCreateSuccess()) {
        alert("color has been created")
      }
    }
    if (!colorName.current.value) {
      setErr(true)
    } else {
      setErr(false)
    }
    return colorName.current.value = ''
  }

  return (
    <div className="color">
      <Sidebar/>
      <div className="color-container">
        <Navbar/>
        <h1>Colors</h1>
        <div className="create-container">
          <div className="colors">
            <input
              type="text"
              ref={colorName}
              placeholder="create color"
              className={err && "error"}
              required
            />
            <button onClick={handleCreateColor}>Add color</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddColor;