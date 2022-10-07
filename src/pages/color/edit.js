import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './color.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
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

  return <div className='edit-page-color'>
    <Sidebar/>
    <div className="detail">
      <Navbar/>
      {/*<span>{oneColor?.color?.colorName}</span>*/}
      <div className="color">
        <h5>Color details</h5>
        <div className="item">
          <div>
            <h6>Color name  </h6>
            <span style={{color:oneColor?.color?.colorName}}>{oneColor?.color?.colorName}</span>
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