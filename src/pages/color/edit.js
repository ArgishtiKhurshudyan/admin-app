import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './color.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {colorDeleteStart, colorUpdateStart, findColorRequest} from "../../redux/color/actions";
import Confirmation from "../../components/confirmation";
import {Toastify} from "../../components/toasterror";
import Swal from "sweetalert2";
import usePrevious from "../../hooks/usePrevious";

const EditColor = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditing, setIsEditing] = useState()
  const [color, setColor] = useState({
    colorName: ''
  })
  const {id} = useParams();
  const dispatch = useDispatch()
  const {oneColor, errorMessage, isColorDeleteSuccess, isColorUpdateSuccess} = useSelector(state => state.color)
  const navigate = useNavigate()
  const prevIsColorDeleteSuccess = usePrevious(isColorDeleteSuccess)
  const prevIsColorUpdateSuccess = usePrevious(isColorUpdateSuccess)
  useEffect(() => {
    dispatch(findColorRequest(id))
  }, [dispatch, id])

  useEffect(() => {
    setColor({
      colorName: oneColor?.colorName,
    })
  }, [oneColor])

  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isColorUpdateSuccess && prevIsColorUpdateSuccess === false) {
      Swal.fire('Color updated!')
    }
    if (isColorDeleteSuccess && prevIsColorDeleteSuccess === false) {
      Swal.fire('Color deleted!')
      navigate('/colors')
    }

  }, [errorMessage,  isColorUpdateSuccess, isColorDeleteSuccess, navigate,prevIsColorDeleteSuccess, prevIsColorUpdateSuccess])

  const handleConfirm = (isConfirm, value) => {
    if (isConfirm) {
      dispatch(colorDeleteStart({id: value}))
    }
  }

  const handleDelete = async () => {
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
      <div className="color">
        <h5>Color details</h5>
        <div className="item">
          <div>
            <h6>Color name </h6>
            <span style={{color: oneColor?.colorName}}>{oneColor?.colorName}</span>
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