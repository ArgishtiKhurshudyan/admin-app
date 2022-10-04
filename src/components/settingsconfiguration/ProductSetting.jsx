import React, {useEffect, useState} from 'react';
import "./productModal.scss"
import {useDispatch, useSelector} from "react-redux";
import {
  getProductStart, productCreateSuccess,
  productStartCreate,
} from "../../redux/product/actions";
import {getColorStart} from "../../redux/color/actions";


const ProductModal = () => {
  const [isClick, setIsClick] = useState(false)
  const [err, setErr] = useState(false)

  const [colors, setColors] = useState([])
  const [formData, setFormData] = useState({
    productName: '',
    colors: []
  })
  const dispatch = useDispatch();
  const {colorData} = useSelector(state => state.color)

  useEffect(() => {
    dispatch(getColorStart())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProductStart())
  }, [dispatch])

  const handleCreate = () => {
    const product = {
      productName: formData.productName,
      colors: formData.colors,
    }

    if (formData.productName) {
      dispatch(productStartCreate({product: product}))
      setIsClick(true)
      if (dispatch(productStartCreate({product: product})))
        if (productCreateSuccess()) {
          alert("product is created")
        }
    }
    if (!formData['productName'].length) {
      setErr(true)
    } else {
      setErr(false)
    }

    return {
      fromData: formData.productName = "",
      colorData: formData.colors = []
    }
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
            className={err && "error"}
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
      </div>
    </>
  );
};

export default ProductModal;
