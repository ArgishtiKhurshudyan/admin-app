import React, {useState, useEffect} from 'react';
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import {getRegisterStart} from "../../redux/user/actions";
import {useNavigate, Link} from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

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
  const {isRegisterFailure, isRegisterSuccess, errorMessage} = useSelector(state => state.user)
  const [message, setMessage] = useState(errorMessage)
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    }
    if (data.password.length >= 8) {
      if (data.password === data.confirmPassword) {
        dispatch(getRegisterStart({user: user}))
      } else {
        setMessage("confirm password is wrong")
      }
    } else {
      setMessage("password must be min 8 digits")
    }
  }

  useEffect(()=> {
    if (!data.firstName){
      setIsDisabled(true)
    }else {
      setIsDisabled(false)
    }
  }, [data])

  const handleChange = (field, value) => {
    setData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  useEffect(() => {
    if (isRegisterSuccess) {
      alert("Register Success")
      navigate("/login")
    }
  }, [isRegisterSuccess, navigate])

  useEffect(() => {
    if (isRegisterFailure) {
      setMessage(errorMessage)
    }
  }, [isRegisterFailure, errorMessage])


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
          <button disabled={!data.firstName} className={isDisabled ? 'disabled' : 'button'} type="submit">Submit</button>


          <Link to="/login" style={{textDecoration: "none", color: "blue", fontWeight: "600"}}>signIn</Link>
          <div style={{color: "red"}}>{message}</div>
        </form>
      </div>
    </>
  );
};

export default SignUp;