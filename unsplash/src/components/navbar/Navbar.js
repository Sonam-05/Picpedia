import React, { Fragment } from 'react'
import "./Navbar.css";
import logo from "../images/unsplash.png"

const Navbar = (props) => {
  return <Fragment>
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className='inputs'>
        <form onSubmit={props.searchFunc}>
          <input type="text" id='searchInput' placeholder='Search here' />
          <button type="submit" id='submitBtn' ><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
    </nav>
  </Fragment>
}

export default Navbar
