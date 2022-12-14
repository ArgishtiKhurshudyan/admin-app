import React, {useEffect, useRef, useState} from 'react';
import "./colorsettin.scss"
import {useDispatch, useSelector} from "react-redux";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  colorCreateSuccess,
  colorDeleteStart,
  colorStartCreate,
  colorUpdateStart,
  getColorStart
} from "../../redux/color/actions";

const ColorSetting = () => {
  // const colorName = useRef()
  // const [isEditing, setIsEditing] = useState(false)
  // const [changeColor, setChangeColor] = useState()
  // const [err, setErr] = useState(false)
  // const [color, setColor] = useState('')
  // const {colorData} = useSelector(state => state.color)
  // const dispatch = useDispatch()
  //
  // useEffect(() => {
  //   dispatch(getColorStart())
  // }, [dispatch])
  //
  // const handleCreateColorr = () => {
  //   let color = {
  //     colorName: colorName.current.value
  //   }
  //   if (colorName.current.value) {
  //     dispatch(colorStartCreate({color}))
  //     if (colorCreateSuccess()) {
  //       alert("color has been created")
  //     }
  //   }
  //   if (!colorName.current.value) {
  //     setErr(true)
  //   } else {
  //     setErr(false)
  //   }
  //   return colorName.current.value = ''
  // }
  //
  // const handleDeleteColor = (id) => {
  //   dispatch(colorDeleteStart({id: id}))
  // }
  //
  // const handleEditColor = (id) => {
  //   setIsEditing(id)
  //   const col = colorData?.find((color) => color.id === id)
  //   setChangeColor(col.colorName)
  // }
  //
  // const handleUpdateColor = (id) => {
  //   setIsEditing(false)
  //   const payload = {
  //     id: id,
  //     colorName: color
  //   }
  //   dispatch(colorUpdateStart(payload))
  // }
  //
  // const onChangeVal = (val) => {
  //   setColor(val)
  // }
  //
  // return (
  //   <div className="color-container">
  //     <h1>Colors</h1>
  //     <div className="create-container">
  //       <input
  //         type="text"
  //         ref={colorName}
  //         placeholder="create color"
  //         className={err && "error"}
  //         required
  //       />
  //       <button onClick={handleCreateColorr}>Add color</button>
  //     </div>
  //     <div className="colors">
  //       {colorData?.map((item) =>
  //         <div className="item" key={item.id}>
  //           <div className="color-title-div">
  //             <h1>color:&nbsp;&nbsp;{item.colorName}</h1>
  //             <div className="changeBtn-div">
  //               <button onClick={() =>
  //                 handleDeleteColor(item.id)}><DeleteForeverIcon style={{color: "#e28282"}}/>
  //               </button>
  //               <button onClick={() =>
  //                 handleEditColor(item.id)}><ModeEditIcon/>
  //               </button>
  //             </div>
  //           </div>
  //           {isEditing === item.id && <div className="editInput">
  //             <input
  //               type="text"
  //               placeholder="update color"
  //               defaultValue={changeColor}
  //               onChange={(e) => onChangeVal(e.target.value)}
  //             />
  //             <button onClick={() => handleUpdateColor(item.id)}>update</button>
  //           </div>
  //           }
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
};

export default ColorSetting;