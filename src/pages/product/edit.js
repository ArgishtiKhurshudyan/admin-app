import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import '../../app.scss'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {findProductRequest} from "../../redux/product/actions";
import {Alert} from "@mui/material";

const Edit =() => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const { oneProduct } = useSelector(state => state.product)
  useEffect(() => {
    dispatch(findProductRequest(id))
  }, [])

  return <div className='edit-page'>
    <Sidebar/>
    <div className="sido">
      <Navbar/>
      <Alert>{oneProduct.productName}</Alert>
      {oneProduct?.colors?.map(i => {
        return <Alert>{i.colorName}</Alert>
      })
      }
    </div>

  </div>
}
export default Edit