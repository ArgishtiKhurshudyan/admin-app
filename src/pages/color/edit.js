import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './color.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {colorDeleteStart, colorUpdateStart, colorUpdateSuccess, findColorRequest} from "../../redux/color/actions";
import Confirmation from "../../components/confirmation";

const EditColor = () => {
  const [isOpen, setIsOpen] = useState(false)
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
      colorName: oneColor?.colorName,
    })
  }, [oneColor])


  const handleConfirm = (isConfirm, value) => {
    if(isConfirm) {
      dispatch(colorDeleteStart({id:value}))
      navigate('/colors')
    }
  }

  const handleDelete = async() => {
    setIsOpen(true)
  }

  const handleEditColor = () => {
    setIsEditing(!isEditing)
  }
  const handleUpdateColor = (id) => {
    setIsEditing(false)
    const payload = {
      id: id,
      colorName: color.colorName
    }
    dispatch(colorUpdateStart(payload))

    if (colorUpdateSuccess) {
      alert("color is updated")
    }
  }

  const handleChange = (field, value) => {
    setColor(prev => ({
      ...prev,
      [field]: value
    }))
  }
  console.log('oneColor', oneColor)
  return <div className='edit-page-color'>
    <Sidebar/>
    <div className="detail">
      <Navbar/>
      <div className="color">
        <h5>Color details</h5>
        <div className="item">
          <div>
            <h6>Color name  </h6>
            <span style={{color:oneColor?.colorName}}>{oneColor?.colorName}</span>
          </div>
          <div className="change-btn">
            <button onClick={handleDelete}><DeleteForeverIcon style={{color: "#e28282"}}/>
            </button>
            <button onClick={handleEditColor}><ModeEditIcon style={{color: "white"}}/></button>
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
          <button onClick={() => handleUpdateColor(oneColor?.id)}>update</button>
        </div>
        }
        <div className={isOpen ? "confirm" : ''}>
          <Confirmation handleConfirm={handleConfirm} isOpen={isOpen} setIsOpen={setIsOpen} value={oneColor?.id}/>
        </div>
      </div>
    </div>
  </div>
}
export default EditColor