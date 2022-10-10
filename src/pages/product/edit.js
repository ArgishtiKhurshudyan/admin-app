import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../../app.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {findProductRequest, productDeleteStart} from "../../redux/product/actions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Modal from "../../components/Modal";
import Confirmation from "../../components/confirmation";

const Edit = () => {
  const [isEditing, setIsEditing] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const {id} = useParams();
  const dispatch = useDispatch()
  const {oneProduct} = useSelector(state => state.product)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(findProductRequest(id))
  }, [dispatch, id])

  const handleConfirm = (isConfirm, value) => {
    if(isConfirm) {
      dispatch(productDeleteStart({id:value}))
      navigate('/products')
    }
  }

  const handleDelete = async () => {
    setIsOpen(true)
  }

  const handleEditProduct = () => {
    setIsEditing(!isEditing)
  }

  return <div className='edit-page'>
    <Sidebar/>
    <div className="sido">
      <Navbar/>
      <div className="sido-2">
      <h3 className="h1-detail">Product details</h3>
      <h5 className="h5-name"> Product name  &nbsp;&nbsp;&nbsp;&nbsp;{oneProduct.productName}</h5>
        <span className="span-color-title">Product colors</span>
        {oneProduct.colors?.map((i) => (
          <span className="span-color" style={{color:"white", backgroundColor:i.colorName}}>{i.colorName}</span>
        ))}
      <div className="products">
        <div className="items">
          <div>
            <span>&nbsp;{oneProduct.productName}</span>
            <div> {
              oneProduct?.colors?.map((color) => {
                return (
                  <span style={{margin: "5px"}}>{
                    color?.colorName
                  }</span>
                )
              })
            }
            </div>
          </div>
          <div className="change-btn">
            <button onClick={handleDelete}><DeleteForeverIcon style={{color: "#e28282"}}/></button>
            <button onClick={() => handleEditProduct(oneProduct.id)}><ModeEditIcon style={{color: "white"}}/></button>
          </div>
          <Confirmation handleConfirm={handleConfirm} isOpen={isOpen} setIsOpen={setIsOpen} value={oneProduct.id}/>
        </div>
        {isEditing &&
        <Modal item={oneProduct} setIsEditing={setIsEditing}/>
        }
      </div>
    </div>
    </div>
  </div>
}
export default Edit