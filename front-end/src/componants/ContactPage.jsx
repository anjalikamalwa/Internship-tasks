import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
const ContactPage = () => {
  const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
  const initialState = {
    name: null,
    email: null,
    message: null,
  };

  const [values, setValues] = useState(initialState);

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/message`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      toast.success("Your message has been sent successfully!", {
        autoClose: 1500,
      });
      setValues(initialState);
    } catch (error) {
      console.error("message sent error:", error);
    }
  };
  return (
    <div className="container">
      <div className="image">
        <img src="images/img.jpg" alt="Contact" />
      </div>

      <div className="form">
        <h2>
          Contact <span> Us</span>
        </h2>
        <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="first">
            <div className="f-01">
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="name"
                value={values.name || ""}
                onChange={handleInput}
              />
            </div>
            <div className="f-02">
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                value={values.email || ""}
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="message">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              value={values.message || ""}
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="btn">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;
