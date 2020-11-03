import React from "react";

class Footer extends React.Component {
  render() {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <footer>
        <div>
            
        </div>
        <div className="copyright">
          <p>Copyright &#169; {year}</p>
        </div>
      </footer>
    );
  }
}
export default Footer;
