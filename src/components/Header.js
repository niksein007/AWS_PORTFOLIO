import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  let [display, set_display] = useState(true);

  const menu_control = () => {
    if (display) {
      set_display(false);
    } else {
      set_display(true);
    }
  };
  const scrollBehaviour = (e) => {
    //safari and other browsers compatible
    let body = document.body; // Safari
    let html = document.documentElement; //other browsers
    let targetID = e.target.id
    if (targetID === 'homeLink' || targetID === 'aboutLink') {
      body.scrollTop = 0; // for safari
      html.scrollTop = 0;
    } else if(targetID === 'projectsLink'){
      body.scrollTop = 900; // for safari
      html.scrollTop = 900;
    }else if(targetID === 'contactLink' ){
      body.scrollTop = 2000; // for safari
      html.scrollTop = 2000; 
    }
    


    console.log(html.scrollTop);
  };

  return (
    <header id="Header">
      <div id='menuBtnCon'>
      <FontAwesomeIcon
        icon={faBars}
        id="menu_btn"
        onClick={() => menu_control()}
        className={display ? "show" : "hide"}
      />
      </div>
    

      <nav
        className={display ? "hide" : ""}
        onMouseLeave={() => menu_control()}
      >
        <div
          className="links"
          id='homeLink'
          onClick={(e) => {
            scrollBehaviour(e);
          }}
        >
          HOME
        </div>

        <div
          className="links"
          id='aboutLink'

          onClick={(e) => {
            scrollBehaviour(e);
          }}
        >
          ABOUT
        </div>

        <div
          className="links"
          id='projectsLink'

          onClick={(e) => {
            scrollBehaviour(e);
          }}
        >
          PROJECTS
        </div>

        <div
          className="links"
          id='contactLink'
          onClick={(e) => {
            scrollBehaviour(e);
          }}
        >
          CONTACT
        </div>
      </nav>
    </header>
  );
}
export default Header;
