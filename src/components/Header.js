import React from "react";
import profile_pic from "../pictures/profilepic.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <a href="#home">HOME</a>

          <a href="#about">ABOUT</a>

          <a href="#projects">PROJECTS</a>

          <a href="#contact">CONTACT</a>
        </nav>

        <div className="profile">
          <img src={profile_pic} alt="" className="profile_pic" />
        </div>
      </header>
    );
  }
}
export default Header;
