import giphyLogo from "../img/giphyLogo.svg";
import giphyIcon from "../img/gyphyIcon.svg";
import ellipsisIcon from "../img/ellipsisIcon.svg";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";
function Navbar({}) {
  return (
    <nav>
      <Link to="/">
        <div className="logoContainer">
          <img src={giphyLogo} alt="logo-gyphint" />
          <img src={giphyIcon} alt="logo-gyphint" />
          <span className="ntTexto">n't</span>
        </div>
      </Link>
      <div className="menuItems">
        <ul>
          <li>Reactions</li>
          <li>Entertainment</li>
          <li>Sports</li>
          <li>Stickers</li>
          <li>Artist</li>
          <li>
            <img className="ellipsisIcon" src={ellipsisIcon} />
          </li>
        </ul>
      </div>
      <div className="loginContainer">
        <ul>
          <li className="uploadColor">Upload</li>
          <li className="createColor">Create</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
