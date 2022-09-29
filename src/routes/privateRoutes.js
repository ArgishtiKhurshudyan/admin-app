import Product from "../pages/product/product";
import Color from "../pages/color/color";
import {Navigate} from "react-router-dom";
import Home from "../pages/home/home";
import Profile from "../pages/profile/profile";
import ContactUs from "../pages/contact/contactUs";

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
    path: '*',
    component: <Navigate to="/" replace/>,
    permissions: []
  },
]

export default routes