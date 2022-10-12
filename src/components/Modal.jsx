import React, {useEffect, useRef, useState} from 'react';
import {productDeleteStart, productUpdateStart, productUpdateSuccess} from "../redux/product/actions";
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {colorDeleteStart, getColorStart} from "../redux/color/actions";
import Swal from "sweetalert2";
import {Toastify} from "./toasterror";
import usePrevious from "../hooks/usePrevious";

const Modal = ({item}) => {
  const [product, setProduct] = useState({
    productName: '',
    colors: [],
    newColors: []
  })
  const checked = useRef()
  const [updateColors, setUpdateColors] = useState({})
  const dispatch = useDispatch()
  const {oneProduct, isProductUpdatedSuccess, errorMessage} = useSelector(state => state.product)
  const {colorData} = useSelector(state => state.color)
  const prevIsProductUpdateSuccess = usePrevious(isProductUpdatedSuccess)
  useEffect(() => {
    setProduct({
      ...product,
      productName: oneProduct?.productName,
      colors: oneProduct?.colors,
    })
  }, [oneProduct])

  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isProductUpdatedSuccess && prevIsProductUpdateSuccess === false) {
      Swal.fire('Product updated!')
    }
  }, [isProductUpdatedSuccess])

  useEffect(() => {
    dispatch(getColorStart())
  }, [dispatch])

  const handleUpdate = (id) => {
    const payload = {
      id: id,
      productName: product.productName,
      colors: updateColors.colors,
      newColor: product.newColors
    }
    dispatch(productUpdateStart(payload))

    if (checked.current) {
      handleDelete(checked.current.value)
    }
  }
  const handleChange = (field, value, id) => {
    setProduct(prevState => ({
      ...prevState,
      [field]: value,
    }))

    setUpdateColors(prevState => ({
      ...prevState,
      [field]: {
        ...prevState.colors,
        [id]: value
      },

    }))

    // if (value.checked){
    //   product.colors.push({colorName:value.name, id:value.id})
    // }
  }

  // const handleChangeColor = (value) => {
  //   if (value.checked) {
  //     value.name.map((name)=> {
  //       // product.newColor = name
  //
  //     })
  //   }
  // }

  const handleDelete = (id) => {
    dispatch(colorDeleteStart({id: id}))
  }

  return (
    <div className="editing-products">
      <>
        <label>Product</label>
        <input
          type="text"
          placeholder="update product"
          value={product.productName}
          onChange={(e) => handleChange("productName", e.target.value)}
        />
        <div className="color-div">
          <h5>Select product color</h5>
          {colorData?.map((item) => (
            <div key={item.id} className="color-checkbox">
              <input
                type="checkbox"
                name={item.colorName}
                id={item.id}
                onChange={(e) => (
                  product.newColors.push(e.target.id)
                )}/>
              <label htmlFor={item.colorName} style={{backgroundColor: item.colorName}}> {item.colorName}</label>
            </div>
          ))}
        </div>
      </>
      <>
        <span>Colors</span>

        {
          oneProduct.colors.map((item, index) => {
            return (
              <div className='inp-product-update'>
                <input
                  type="text"
                  style={{backgroundColor: item.colorName, color: "whitesmoke"}}
                  placeholder="update color"
                  value={product.colors[index]?.colorName}
                  onChange={(e) => handleChange("colors", e.target.value, item.id)}
                />
                {/*<input ref={checked} value={item.id} type="checkbox" /> <label>del</label>*/}
              </div>
            )
          })
        }
      </>
      <button className='update' onClick={() => handleUpdate(item.id)}>update</button>
    </div>
  );
};

export default Modal;
