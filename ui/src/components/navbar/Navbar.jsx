import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <nav>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form className="d-flex search" role="search" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-expanded="false">
            regritation
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Login</a></li>
            <li><a className="dropdown-item" href="#">Signup</a></li>
          </ul>
        </li>
        </ul>


    </div>
  </div>
</nav> */}


{/* <div className="topnav">
  <a className="active" href="#home">LOGO</a>
  <input type="text" placeholder="Search.."/>
  <span className='fa fa-search'></span>
  <button className='btn btn-primary'>Search</button>
</div> */}


<div className="logo">LOGO</div>
<div className="search_box">
    <input type="search" placeholder="Search.." />
    {/* <span className='fa fa-search'></span> */}
</div>

<ol>
    <li><a href="/">Login</a></li>
</ol>


    </nav>
  )
}

export default Navbar
