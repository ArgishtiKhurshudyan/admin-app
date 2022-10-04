import React, {useState} from 'react';
import "./contact.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ColorButtons from "../../muitable/Button";
import {useDispatch} from "react-redux";
import {messageCreateSuccess, messageStartCreate} from "../../redux/contactus/actions";
import {useNavigate} from "react-router-dom";

const ContactUs = () => {
  const [message, setMessage] = useState({
    username: "",
    email: "",
    message: ""
  })
  const dispatch = useDispatch()
const navigate = useNavigate()
  const handleCreate = () => {
    const messages = {
      username: message.username,
      email: message.email,
      message: message.message
    }
    if (message.username && message.email && message.message) {
      dispatch(messageStartCreate({messages}))
      if (messageCreateSuccess) {
        alert("your message success")
        navigate("/")
      }
      setMessage({
        username: "",
        email: "",
        message: ""
      })
    }
  }

  const handleChange = (field, value) => {
    setMessage(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <div className="contactus">
      <Sidebar/>
      <div className="contactus-container">
        <Navbar/>
        <div className="contact-us">
          <form className="form">
            <h3 style={{color: "#7451f8"}}>Contact us</h3>
            <div className="mix">
              <div className="inp-div">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="username"
                  required
                  name="text"
                  value={message.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                />
              </div>
              <div className="inp-div">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="email"
                  value={message.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="textarea-div">
              <label>Your text</label>
              <textarea
                placeholder="write message"
                id="area"
                style={{width: "100%"}}
                required
                value={message.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>
            <ColorButtons handleCreate={handleCreate}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;