import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import ".././App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <div>
      <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <Link className='navbar-brand' to='/'>
              ReactThor
            </Link>
          </div>
          <ul className='nav navbar-nav'>
            <li className='active'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
         
          <form className='navbar-form navbar-left' action='/'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'
              />
            </div>
            <button type='submit' className='btn btn-default'>
              Submit
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
