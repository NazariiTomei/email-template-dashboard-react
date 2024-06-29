import React, { useState, useEffect } from "react";

const EmailTemplate = () => {
  return (
    <>
      <div className="email-template">
        <div className="left">
          <p className="email-content">Email Templates</p>
        </div>
        <div className="right"></div>
        <div className="right-footer">
          <div className="svgs">
            <div className="svg1">
              <img src="/Vector1.png" alt="Vector 1" />
            </div>
            <div className="svg2">
              <img src="/Vector2.png" alt="Vector 2" />
            </div>
          </div>
          <div className="migranium">
            <img src="/migranium.png" />
          </div>
          <div className="spaces">
            <img src="/spaces.png" />
          </div>
          <div className="cancel">
            <img src="/cancel.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailTemplate;
