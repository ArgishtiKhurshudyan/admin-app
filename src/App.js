import './app.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {getLoginStart} from "./redux/user/actions";
import publicRoutes from "./routes/publicRoutes";
import privateRoutes from "./routes/privateRoutes";
import {ToastContainer} from "react-toastify";

function App() {
  const token = localStorage.getItem('access_token')
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      dispatch(getLoginStart())
    }
  }, [token, dispatch])

  const {isLoginSuccess} = useSelector((state) => state.user)

  useEffect(() => {
    if (isLoginSuccess) {
      window.location.replace("/")
    }
  })
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/>
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

