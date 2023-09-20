import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="book">
        <form
          action="mailto:ankitkumarrockingstar@gmail.com"
          method="get"
          enctype="text/plain"
        >
          Name:
          <br />
          <input type="text" name="name" />
          <br />
          E-mail:
          <br />
          <input type="text" name="mail" />
          <br />
          Comment:
          <br />
          <input type="text" name="comment" />
          <br />
          <br />
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form>
        <div className="cover">
          <p>
            <i
              className="fa-solid fa-circle-user"
              style={{ fontSize: "2rem" }}
            ></i>
            <br />
            <br />
            Contact Me..<i className="fa-regular fa-face-laugh-beam"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
