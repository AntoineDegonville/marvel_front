import React from "react";
import "../Header/Header.css";
import Logo from "../../assets/img/Logo.png";
import Characters from "../../assets/img/characters.png";
import Comics from "../../assets/img/comics.png";
import Fanpage from "../../assets/img/fanpage.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="backheader">
      <header>
        <Link to="/home">
          <img className="header_logo" src={Logo} alt="" />
        </Link>

        <div className="header_category">
          <div className="header_characters">
            <Link to="/characters">
              <img src={Characters} alt="" />
            </Link>
          </div>
          <div className="header_comics">
            <Link to="/comics">
              <img src={Comics} alt="" />
            </Link>
          </div>
        </div>
        <div className="header_fanpage">
          <img src={Fanpage} alt="" />
        </div>
      </header>
    </div>
  );
};

export default Header;
