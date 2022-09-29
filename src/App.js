// import Home from "./pages/home/home";
import './app.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Profile from "./pages/profile/profile";
// import Product from "./pages/product/product";
// import ContactUs from "./pages/contact/contactUs";
// import Login from "./pages/auth/login";
// import Register from "./pages/auth/register";
// import Color from "./pages/color/color";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getLoginStart} from "./redux/user/actions";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";


function App() {
  const token = localStorage.getItem('access_token')
  const dispatch = useDispatch()


  useEffect(() => {
    if (token) {
      dispatch(getLoginStart())
    }
  }, [token])

  const {data, isLoginSuccess} = useSelector((state) => state.user)

  useEffect(() => {
    if (isLoginSuccess) {
      window.location.replace("/")
    }
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {
              !token ? publicRoutes.map((rout) => (
                <Route exact path={rout.path} element={rout.component} key={rout.id}/>
              )) : privateRoutes.map((rout) => (
                <Route exact path={rout.path} element={rout.component} key={rout.id}/>
              ))
            }
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

// <Route index element={<Home/>}/>
// <Route path="profile" element={<Profile/>}/>
// <Route path="products" element={<Product/>}/>
// <Route path="colors" element={<Color/>}/>
// <Route path="contact" element={<ContactUs/>}/>
// <Route path="login" element={<Login/>}/>
// <Route path="register" element={<Register/>}/>