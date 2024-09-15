import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/getInTouch.css";
// import Mailto from "react-mailto";
import { useNavigate } from "react-router-dom";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/");
  };

  // const mailtoParams = {
  //   email: "oladeleoladipupo555@gmail.com",
  //   subject: formData.subject,
  //   body: `Full Name: ${formData.fullname}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  // };

  return (
    <div>
      <Navbar />
      <div className="touch_container">
        <h2 className="bigHead">Get in touch </h2>
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter full Name"
                value={formData.fullname}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit">SUBMIT</button>
            {/* <Mailto
              email={mailtoParams.email}
              subject={mailtoParams.subject}
              body={mailtoParams.body}
            >
            </Mailto> */}
          </form>
        </div>
      </div>
    </div>
  );
}
