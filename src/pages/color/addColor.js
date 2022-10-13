import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
  colorStartCreate,
} from "../../redux/color/actions";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import {Toastify} from "../../components/toasterror";
import Swal from "sweetalert2";

const AddColor = () => {
  const colorName = useRef()
  const [err, setErr] = useState(false)
  const dispatch = useDispatch()
  const {errorMessage, isColorCreatedSuccess} = useSelector(state => state.color)

  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isColorCreatedSuccess) {
      Swal.fire("Color created success!")
    }
  }, [errorMessage, isColorCreatedSuccess])


  const handleCreateColor = () => {
    let color = {
      colorName: colorName.current.value
    }
    if (colorName.current.value) {
      dispatch(colorStartCreate({color}))
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
        <div className="create-container">
          <div className="colors">
            <h5 style={{color: "wheat"}}>Create color</h5>
            <div className="inp-div">
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
    </div>
  );
};

export default AddColor;