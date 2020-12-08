import React from "react";

function Footer () {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <footer id='Footer'>
        <div>
            
        </div>
        <div className="copyright">
          <p id='goTop'>go to top</p>
          <p>Copyright &#169; {year}</p>
        </div>
      </footer> 
    );
}
export default Footer;
 