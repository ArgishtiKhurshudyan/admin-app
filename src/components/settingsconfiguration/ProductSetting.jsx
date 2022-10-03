import React, {useEffect, useState} from 'react';
import "./productModal.scss"
import {useDispatch, useSelector} from "react-redux";
import {
  getProductStart,
  productDeleteStart,
  productStartCreate,
  productUpdateStart
} from "../../redux/product/actions";
import Modal from "../Modal";
import {getColorStart} from "../../redux/color/actions";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProductModal = () => {
  const [isClick, setIsClick] = useState(false)
  const [isEditing, setIsEditing] = useState("")
  const [colors, setColors] = useState([])
  const [err, setErr] = useState(false)
  const [changeProduct, setChangeProduct] = useState("")
  const [product, setProduct] = useState('')
  const [formData, setFormData] = useState({
    productName: '',
    colors: []
  })
  const dispatch = useDispatch();
  const {data, isProductGetSuccess, isProductCreatedSuccess} = useSelector(state => state.product)
  const {colorData} = useSelector(state => state.color)

  useEffect(() => {
    dispatch(getColorStart())
  }, [])

  useEffect(() => {
    dispatch(getProductStart())
  }, [])

  const handleCreate = () => {
    const product = {
      productName: formData.productName,
      colors: formData.colors,
    }

    if (formData.productName) {
      dispatch(productStartCreate({product: product}))
      setIsClick(true)
      if(isProductCreatedSuccess) {
        alert("product is created")
      }
    }
    if (!formData['productName'].length) {
      setErr(true)
    }else {
      setErr(false)
    }

    return {
      fromData: formData.productName = "",
      colorData: formData.colors = []
    }
  }

  const handleDelete = (id) => {
    dispatch(productDeleteStart({id}))
  }

  const handleEditProduct = (id) => {
    setIsEditing(id)
    const prod = data?.find((item) => item.id === id)
    setChangeProduct(prod.productName)
  }

  const handleUpdate = (id) => {
    setIsEditing('')
    const payload = {
      id: id,
      productName: product
    }
    dispatch(productUpdateStart(payload))

  }

  const changeVal = (val) => {
    setProduct(val)
    setChangeProduct('')
  }

  const handleChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const addActiveColor = (color) => {
    document.getElementById(color.id).classList.add("active");
    setColors(color)
    setIsClick(false)
  }

  return (
    <>
      <h1>Products</h1>
      <div className="product-container-create">
        <div className="product-create">
          <h3>Create product</h3>
          <input
            type="text"
            placeholder="product name"
            value={formData['productName']}
            required
            className={err  && "error"}
            onChange={(e) => handleChange('productName', e.target.value)}
          />
          <button className="create-btn-prod" onClick={handleCreate}>create</button>
          <div className="colors-div">
            <h3>Select product color</h3>
            {colorData?.map((item) => (
              <div className="select-color-container">
                <button id={item.id} className={isClick && ""} onClick={(e) => {
                  addActiveColor(item)
                  formData.colors.push(item.id)
                }}
                >
                  {item.colorName}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="products">
          <h3 style={{color: "white"}}>Created products</h3>
          {data?.map((item) => (
              <div className="items-div">
                <div className="items">
                  <div>
                    <span>product: {item?.productName}</span>
                    <div> color:{
                      item?.colors?.map((color) => {
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
                    <button onClick={() => handleDelete(item.id)}><DeleteForeverIcon style={{color: "#e28282"}}/></button>
                    <button onClick={() => handleEditProduct(item.id)}><ModeEditIcon style={{color: "white"}}/></button>
                  </div>
                </div>
                {isEditing === item.id &&
                <Modal changeProduct={changeProduct}  changeVal={changeVal} handleUpdate={handleUpdate} item={item}/>
                }
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductModal;
