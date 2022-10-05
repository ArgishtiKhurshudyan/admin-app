import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../../app.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {findProductRequest, productDeleteStart} from "../../redux/product/actions";
import {Alert} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Modal from "../../components/Modal";

const Edit = () => {
  const [isEditing, setIsEditing] = useState()
  const {id} = useParams();
  const dispatch = useDispatch()
  const {oneProduct} = useSelector(state => state.product)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(findProductRequest(id))
  }, [dispatch, id])


  const handleDelete = (id) => {
    dispatch(productDeleteStart({id}))
    navigate('/products')
  }

  const handleEditProduct = (id) => {
    setIsEditing(!isEditing)
  }

  return <div className='edit-page'>
    <Sidebar/>
    <div className="sido">
      <Navbar/>
      <div className="sido-2">
      <h3>Product details</h3>
      <h5> Product  {oneProduct.productName}</h5>
        {oneProduct.colors?.map((i) => (
          <span className="span-color" style={{color:i.colorName}}>{i.colorName}</span>

        ))}
      <div className="products">
        <div className="items">
          <div>
            <span>product: {oneProduct.productName}</span>
            <div> color:{
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
            <button onClick={() => handleDelete(oneProduct.id)}><DeleteForeverIcon style={{color: "#e28282"}}/></button>
            <button onClick={() => handleEditProduct(oneProduct.id)}><ModeEditIcon style={{color: "white"}}/></button>
          </div>
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