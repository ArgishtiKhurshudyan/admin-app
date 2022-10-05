import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../../app.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {Alert} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {colorDeleteStart, colorUpdateStart, findColorRequest} from "../../redux/color/actions";

const EditColor = () => {
  const [isEditing, setIsEditing] = useState()
  const [color, setColor] = useState({
    colorName: ''
  })
  const {id} = useParams();
  const dispatch = useDispatch()
  const {oneColor} = useSelector(state => state.color)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(findColorRequest(id))
  }, [dispatch, id])

  useEffect(() => {
    setColor({
      ...color,
     colorName: oneColor.color?.colorName,
    })
  }, [oneColor])

  const handleDelete = (id) => {
    dispatch(colorDeleteStart({id}))
    navigate('/colors')
  }

  const handleEditProduct = (id) => {
    setIsEditing(!isEditing)
  }
  const handleUpdateColor = (id) => {
    setIsEditing(false)
    const payload = {
      id: id,
      colorName: color.colorName
    }
    dispatch(colorUpdateStart(payload))
  }

  const handleChange = (field, value) => {
    setColor(prev => ({
      ...prev,
      [field]: value
    }))
  }

  console.log("name", color.colorName)
  console.log("colorid", oneColor.color?.id)


  return <div className='edit-page'>
    <Sidebar/>
    <div className="sido">
      <Navbar/>
      <h3>Color detail</h3>
      <Alert>{oneColor?.color?.colorName}</Alert>
      <div className="products">
        <div className="items">
          <div>
            <span>color: {oneColor?.color?.colorName}</span>
          </div>
          <div className="change-btn">
            <button onClick={() => handleDelete(oneColor.color.id)}><DeleteForeverIcon style={{color: "#e28282"}}/>
            </button>
            <button onClick={() => handleEditProduct(oneColor.id)}><ModeEditIcon style={{color: "white"}}/></button>
          </div>
        </div>
        {isEditing &&
        <div className="editInput">
          <input
            type="text"
            placeholder="update color"
            value={color.colorName}
            onChange={(e) => handleChange('colorName', e.target.value)}
          />
          <button onClick={() => handleUpdateColor(oneColor?.color.id)}>update</button>
        </div>
        }
      </div>
    </div>
  </div>
}
export default EditColor