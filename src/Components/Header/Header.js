import React from "react";
import "../Header/Header.css";
import Logo from "../../assets/img/Logo.png";
import Characters from "../../assets/img/characters.png";
import Comics from "../../assets/img/comics.png";
import { Link } from "react-router-dom";

const Header = ({ clicked, setClicked }) => {
  // console.log(clicked);
  return (
    <div className="backheader">
      <header>
        <Link to="/home">
          <img
            onClick={() => {
              setClicked(false);
            }}
            className="header_logo"
            src={Logo}
            alt=""
          />
        </Link>

        <div className="header_category">
          <div className="header_characters">
            <Link to="/characters">
              <img
                style={{ visibility: clicked === true ? "visible" : "hidden" }}
                src={Characters}
                alt=""
              />
            </Link>
          </div>
          <div className="header_comics">
            <Link to="/comics">
              <img
                style={{ visibility: clicked === true ? "visible" : "hidden" }}
                src={Comics}
                alt=""
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
