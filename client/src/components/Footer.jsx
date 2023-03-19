import React from "react";
import "./Footer.css";

const Footer = () => {

  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#212121",
        color: "#fff",
        padding: "20px",
        marginTop: "20px",
        bottom: 0,
      }}
    >
      <h3>Made with ❤️ </h3>
      <h4>By <a href="https://github.com/Jace254">@Jace254</a></h4>
    </footer>
  );
};

export default Footer;
