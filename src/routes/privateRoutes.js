import Product from "../pages/product/product";
import Color from "../pages/color/color";
import {Navigate} from "react-router-dom";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";
import ContactUs from "../pages/contact/contactUs";
import Setting from "../pages/settings/setting";
import Edit from "../pages/product/edit";
import EditColor from "../pages/color/edit";
import AddColor from "../pages/color/addColor";
import AddProduct from "../pages/product/addProduct";

const routes = [
  {
    id: 1,
    key: "product",
    path: '/products',
    component: <Product/>,
    permissions: []
  },
  {
    id: 2,
    key: "color",
    path: '/colors',
    component: <Color/>,
    permissions: []
  },
  {
    id: 3,
    key: "home",
    path: '/',
    component: <Home/>,
    permissions: []
  },
  {
    id: 4,
    key: "profile",
    path: '/profile',
    component: <Profile/>,
    permissions: []
  },
  {
    id: 5,
    key: "contact",
    path: '/contact',
    component: <ContactUs/>,
    permissions: []
  },
  {
    id: 6,
    key: "setting",
    path: '/settings',
    component: <Setting/>,
    permissions: []
  },
  {
    id: 7,
    path: '/product-detail/:id',
    component: <Edit/>,
    permissions: []
  },
  {
    id: 8,
    path: '/color-detail/:id',
    component: <EditColor/>,
    permissions: []
  },
  {
    id: 9,
    path: '/color-add',
    component: <AddColor/>,
    permissions: []
  },
  {
    id: 10,
    path: '/product-add',
    component: <AddProduct/>,
    permissions: []
  },
  {
    id: 11,
    path: '*',
    component: <Navigate to="/" replace/>,
    permissions: []
  },

]

export default routes