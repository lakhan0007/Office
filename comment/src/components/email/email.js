import React from "react";
import "./email.css";

export default function email() {
  return (
    <>
      <div className="container">
        <div className="content">
          <h1>Bharat School</h1>
          <hr />
          <p>
            <b>Hello user,</b>
          </p>
          <p>
            Thnak you for
            choosing <strong>Bharat school.</strong> Use this OTP to complete
            your Sign Up procedures and verify your account on
            <strong>Bharat school</strong>
          </p>
          <p>
           Remember, Never
            share this OTP with anyone, not even if
            <strong> Bharat school</strong> ask to you
          </p>
          <div className="number"><strong>547657</strong></div>
            
          <p>Regards, <br /> Team <strong>Bharat school</strong> </p>
        </div>
      </div>
    </>
  );
}
