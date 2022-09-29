import React from 'react';
import "./contact.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ColorButtons from "../../muitable/Button";

const ContactUs = () => {
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
                <input type="text"/>
              </div>

              <div className="inp-div">
                <label>Email</label>
                <input type="text"/>
              </div>
            </div>

            <div className="textarea-div">
              <label>Your text</label>
              <textarea placeholder="write message" id="area" style={{width: "100%"}}/>
            </div>
            <ColorButtons/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;