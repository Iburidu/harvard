import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import ".././App.css";
import VpnKeyIcon from '@mui/icons-material/VpnKey';


function Header() {



  return (
    <div>
 

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          {/* <li>
            <Link to='/login'>Login</Link>
          </li> */}
          <li>
            <Link to='/login' alt='Login'>{<VpnKeyIcon/>}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
