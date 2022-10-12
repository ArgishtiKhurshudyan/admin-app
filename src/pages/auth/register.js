import React, {useState, useEffect} from 'react';
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import {getRegisterStart} from "../../redux/user/actions";
import {useNavigate, Link} from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Toastify} from "../../components/toasterror";
import Swal from "sweetalert2";

const SignUp = () => {
  const [icon, setIcon] = useState({
    password: false,
    confirmPassword: false
  })
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [isDisabled, setIsDisabled] = useState(false)
  const dispatch = useDispatch()
  const {isRegisterSuccess, errorMessage} = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (errorMessage) {
      Toastify(errorMessage, 'error')
    }
    if (isRegisterSuccess) {
      Swal.fire('register  success!')
      navigate("/login")
    }
  }, [errorMessage, isRegisterSuccess])


  const handleClick = async (e) => {
    e.preventDefault()
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword
    }

    dispatch(getRegisterStart({user: user}))
  }

  useEffect(() => {
    if (!data.firstName) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [data])

  const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }


  const handleChangeIcon = (field, value) => {
    setIcon(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <>
      <div className="register-container">
        <form onSubmit={handleClick} className="register-form">
          <label id="name" className="reg-label">First Name</label>
          <input
            value={data.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            type="text"
            placeholder="firstName"
            required
          />
          <label id="name" className="reg-label">Last Name</label>
          <input
            value={data.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            type="text"
            placeholder="lastName"
            required
          />
          <label className="reg-label">Email</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="email"
            required
          />
          <div className="closeIcon">
            <label className="reg-label">Password</label>
            <input
              type={icon.password ? "text" : "password"}
              placeholder="password"
              value={data.password}
              onChange={(e) => handleChange("password", e.target.value)}
              required
            />
            <div onClick={(e) => handleChangeIcon('password', !icon.password)} className="icon">{
              icon.password ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>
            }
            </div>
          </div>
          <div className="closeIcon">
            <label className="reg-label">Confirm password</label>
            <input
              type={icon.confirmPassword ? "text" : "password"}
              placeholder="confirm password"
              value={data.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              required
            />
            <div onClick={(e) => handleChangeIcon('confirmPassword', !icon.confirmPassword)} className="icon">
              {icon.confirmPassword ? <RemoveRedEyeIcon/> : <VisibilityOffIcon/>}
            </div>
          </div>
          <button disabled={!data.firstName} className={isDisabled ? 'disabled' : 'button'} type="submit">Submit
          </button>


          <Link to="/login" style={{textDecoration: "none", color: "blue", fontWeight: "600"}}>signIn</Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;