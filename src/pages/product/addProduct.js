import React, {useEffect, useState} from 'react';
import {getProductStart, productCreateSuccess, productStartCreate} from "../../redux/product/actions";
import {useDispatch, useSelector} from "react-redux";
import {getColorStart} from "../../redux/color/actions";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "../../components/settingsconfiguration/productModal.scss"
import {Toastify} from "../../components/toasterror";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [err, setErr] = useState(false)
  const [isClick, setIsClick] = useState(false)
  const [colors, setColors] = useState([])
  const [formData, setFormData] = useState({
    productName: '',
    colors: []
  })
  const dispatch = useDispatch();
  const {colorData} = useSelector(state => state.color)
  const {errorMessage, isProductCreatedSuccess} = useSelector(state => state.product)

  useEffect(() => {
    if(errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if(isProductCreatedSuccess) {
      Swal.fire('Product created success!')
    }
  }, [errorMessage, isProductCreatedSuccess])


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
    }

    if (!formData['productName'].length) {
      setErr(true)
    } else {
      setErr(false)
    }

    return {
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
    <div className='product'>
      <Sidebar/>

      <div className="product-container">
        <Navbar/>
      <div className="product-container-create">
        <div className="product-create">
          <h5>Create product</h5>
          <input
            type="text"
            placeholder="product name"
            value={formData['productName']}
            required
            className={err && "error"}
            onChange={(e) => handleChange('productName', e.target.value)}
          />
          <button className="create-btn-prod" onClick={handleCreate}>create</button>
        </div>
        <div className="colors-div">
          <h5>Select product color</h5>
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
    </div>
  );
};

export default AddProduct;