import React from "react";
import { render } from "react-dom";

//style
const appStyles = {
  fontFamily: "sans-serif",
  width: "auto"
};

const buttonStyles = {
  padding: "8px",
  border: "solid blue 2px",
  borderRadius: "5px",
  textDecoration: "none",
  color: "blue",
  marginRight: "30px",
  display: "inline-block",
  margin: "0px",
  backgroundColor: "rgb(210,215,255)"
};

const headerStyles = {
  width: "auto",
  height: "40px",
  backgroundColor: "rgb(210,215,255)",
  margin: "0px",
  padding: "15px"
};

const inlineStyle = {
  display: "inline"
};

const navbarStyle = {
  display: "inline-block",
  listStyle: "none",
  position: "relative",
  margin: "0px",
  padding: "0px"
};

const navbarContainer = {
  textAlign: "center",
  width: "auto",
  backgroundColor: "lightblue",
  padding: "0px",
  margin: "0px",
  height: "40px",
  overflow: "hidden"
};

const navbarListStyle = {
  float: "left",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "20px",
  paddingRight: "20px",
  margin: "0px",
  height: "20px",
  lineHeight: "20px"
};

const heroStyle = {
  backgroundImage:
    "url(https://s-media-cache-ak0.pinimg.com/originals/7e/72/98/7e7298aa365d776e7ca34f11c9298ee9.jpg)",
  width: "auto",
  height: "200px",
  padding: "200px",
  margin: "0px"
};

const contentsStyle = {
  width: "auto",
  backgroundColor: "lightgray",
  paddingTop: "50px",
  paddingLeft: "100px",
  paddingRight: "100px",
  paddingBottom: "150px"
};

const footerStyle = {
  width: "auto",
  height: "auto",
  textAlign: "center",
  backgroundColor: "gray",
  padding: "40px",
  margin: "0px"
};

const footerColStyle = {
  width: "150px",
  display: "inline-block",
  padding: "10px",
  textAlign: "left",
  borderLeft: "solid 1px white"
};

//components
const Button = () =>
  <a
    style={buttonStyles}
    href={"\u0023"}
    onMouseOver={addButtonColor}
    onMouseOut={resetButtonColor}
  >
    <strong>Click</strong>
  </a>;

const Header = () =>
  <div style={headerStyles}>
    <h1 style={inlineStyle}>Header</h1>
  </div>;

const Navbar = () =>
  <div style={navbarContainer}>
    <ul style={navbarStyle}>
      <li
        style={navbarListStyle}
        onMouseOver={addNavColor}
        onMouseOut={resetNavColor}
      >
        Home
      </li>
      <li
        style={navbarListStyle}
        onMouseOver={addNavColor}
        onMouseOut={resetNavColor}
      >
        About
      </li>
      <li
        style={navbarListStyle}
        onMouseOver={addNavColor}
        onMouseOut={resetNavColor}
      >
        Contact
      </li>
      <li
        style={navbarListStyle}
        onMouseOver={addNavColor}
        onMouseOut={resetNavColor}
      >
        Help
      </li>
    </ul>
  </div>;

const Hero = () =>
  <div style={heroStyle}>
    <h1 style={inlineStyle}>Hero</h1>
    <br />
    <h3 style={inlineStyle}>Hero Subtitle</h3>
  </div>;

const Contents = () =>
  <div style={contentsStyle}>
    <h2 style={inlineStyle}>Title</h2>
    <p>Contents</p>
    <Button />
  </div>;

const Footer = () =>
  <div style={footerStyle}>
    <div style={footerColStyle}>
      <h3 style={inlineStyle}>Footer Column</h3>
      <p>Column contents</p>
    </div>
    <div style={footerColStyle}>
      <h3 style={inlineStyle}>Footer Column</h3>
      <p>Column contents</p>
    </div>
    <div style={footerColStyle}>
      <h3 style={inlineStyle}>Footer Column</h3>
      <p>Column contents</p>
    </div>
  </div>;

const App = () =>
  <div style={appStyles}>
    <Header />
    <Navbar />
    <Hero />
    <Contents />
    <Footer />
  </div>;

//functions
const setBody = () => {
  document.body.style.margin = "0px";
  document.body.style.width = "100%";
};

const addButtonColor = e => {
  e.currentTarget.style.backgroundColor = "white";
  console.log(e.currentTarget.style.opacity);
};

const resetButtonColor = e =>
  (e.currentTarget.style.backgroundColor = "rgb(210,215,255)");

const addNavColor = e => {
  e.currentTarget.style.backgroundColor = "white";
  console.log(e.currentTarget.style.opacity);
};

const resetNavColor = e =>
  (e.currentTarget.style.backgroundColor = "lightblue");

//render app
setBody();
render(<App />, document.getElementById("root"));
