import React, {useEffect, useState} from 'react';
import {productUpdateStart, productUpdateSuccess} from "../redux/product/actions";
import {useDispatch, useSelector} from "react-redux";

const Modal = ({item, setIsEditing}) => {
  const [product, setProduct] = useState({
    productName: '',
    colors: {}
  })
  const [updateColors, setUpdateColors] = useState({})
  const dispatch = useDispatch()
  const {oneProduct} = useSelector(state => state.product)

  useEffect(() => {
    setProduct({
      ...product,
      productName: oneProduct?.productName,
      colors: oneProduct?.colors
    })
  }, [oneProduct])


  const handleUpdate = (id) => {
    setIsEditing('')
    const payload = {
      id: id,
      productName: product.productName,
      colors: updateColors.colors
    }
    dispatch(productUpdateStart(payload))
    if (productUpdateSuccess) {
      alert("product has been updated")
    }
  }

  const handleChange = (field, value, id) => {
    setProduct(prevState => ({
      ...prevState,
      [field]: value
    }))
    setUpdateColors(prevState => ({
      ...prevState,
      [field]: {
        ...prevState.colors,
        [id]: value
      }
    }))
  }
  return (
    <div>
      <input
        type="text"
        placeholder="update product"
        value={product.productName}
        onChange={(e) => handleChange("productName", e.target.value)}
      />
      {
        oneProduct.colors?.map((item, index) => {
          return (<input
              type="text"
              placeholder="update color"
              value={product.colors[index]?.colorName}
              onChange={(e) => handleChange("colors", e.target.value, item.id)}
            />
          )
        })
      }
      <button onClick={() => handleUpdate(item.id)}>update</button>
    </div>
  );
};

export default Modal;
