import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="Contact">
      You can reach me through the links:
      <a href="https://www.linkedin.com/in/mark-pearce-ba359996/">
        {" "}
        <FontAwesomeIcon icon={faLinkedin} className="brands" />
      </a>
      <a href="https://twitter.com/niksein007">
        {" "}
        <FontAwesomeIcon icon={faTwitterSquare} className="brands" />
      </a>
    </div>
  );
}
export default Contact;
