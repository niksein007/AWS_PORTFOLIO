import {useState} from "react";
import profile_pic from "../pictures/profilepic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Header() {
  let [display,set_display] = useState(true)

  const menu_control = () => {
    if (display) {
    set_display(false)
      
    } else {
    set_display(true)
      
    }
  };


  return (
    <header id="header">
      <FontAwesomeIcon icon={faBars} id="menu_btn" 
      onClick={() => menu_control() } className={display?'show':'hide'} />

      <nav className ={display?'hide':'nav'}
      onMouseLeave={()=> menu_control()}>
        <a href="#home">HOME</a>

        <a href="#About">ABOUT</a>

        <a href="#Projects">PROJECTS</a>

        <a href="#Contact">CONTACT</a>
      </nav>

      <div className="profile">
        <img src={profile_pic} alt="" className="profile_pic" />
      </div>
    </header>
  );
}
export default Header;
