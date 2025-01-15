"use client";

import React from "react";

const WhatsappButton = () => {
  const whatsappButtonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: "1000",
    backgroundColor: "#25D366", // WhatsApp color
    borderRadius: "50%",
    padding: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    color: "white",
    fontSize: "24px",
    height: "55px",
    width: "55px",
    display: "flex", // Use flexbox to center the icon
    alignItems: "center", // Vertically center
    justifyContent: "center", // Horizontally center
    transition: "transform 0.3s ease", // Smooth scaling transition
  };

  const handleClick = () => {
    window.open("https://wa.me/923018691905", "_blank");
  };

  // Hover effect with scale
  const handleHover = (e) => {
    e.target.style.transform = "scale(1.1)"; // Scale up on hover
  };

  const handleHoverOut = (e) => {
    e.target.style.transform = "scale(1)"; // Scale back on hover out
  };

  return (
    <div
      style={whatsappButtonStyle}
      onClick={handleClick}
      onMouseEnter={handleHover} // Add hover effect
      onMouseLeave={handleHoverOut} // Remove hover effect
    >
      <i className="fab fa-whatsapp" style={{ fontSize: "30px" }}></i>{" "}
      {/* Centered WhatsApp icon */}
    </div>
  );
};

export default WhatsappButton;
