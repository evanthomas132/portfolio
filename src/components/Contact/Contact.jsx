import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { useInView } from "framer-motion";
const Contact = () => {
  const [sendEmail, setSendEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_t5qzlip",
        "template_aw6w24g",
        form.current,
        "eCSryfeNt5Mu3hul8"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setSendEmail("your message has been sent, Thank you!");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className="contact"
      id="contact"
      ref={ref}
      style={{
        transform: isInView ? "opacity:0" : "opacity:1",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <div className="contact_title">
        <h1>Contact Me</h1>
        <div className="contact_me">
          <h4>Phone: 07706472841</h4>
          <h4>Email: evan_thomas132@hotmail.com</h4>
        </div>
      </div>
      <div className="contact_form">
        <form ref={form}>
          {loading ? <CircularProgress /> : null}
          <h3>{sendEmail ? sendEmail : null}</h3>
          <div className="name">
            <label>Name:</label>
            <input type="text" name="user_name" />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="message">
            <label>Message:</label>
            <textarea cols="30" rows="10" name="message"></textarea>
          </div>
          <button onClick={handleClick} type="submit" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
