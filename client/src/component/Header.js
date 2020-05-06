import React, { Component } from 'react';
import { Link , BrowserRouter as Router} from 'react-router-dom';
import Logo from '../component/Rhemalogo.png';
import './style.css';

class Header extends Component {
    render() {
        return (
            <div>
  <header className="main-header">
    {/* Logo */}
    <a href="index.html" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini"><b>RS</b></span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg"><img className="brandlogo-image"  style={{width: '200px', height: '200px'}} src={Logo} alt='RHEMA SYSTEMS'/></span>
    </a>
    {/* Header Navbar: style can be found in header.less */}
    <nav className="navbar navbar-static-top">
      {/* Sidebar toggle button*/}
      <a href="index.html" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
      </a>
      {/* Navbar Right Menu */}
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
        {/* Tasks: style can be found in dropdown.less */}
        {/*<Router>
           <li className="nav-item">
             <Link className="nav-link" to="/login">
                <b>Login</b>
             </Link>
           </li>
           <li className="nav-item">
             <Link className="nav-link" to="/logout">
               <b>Logout</b>
             </Link>
          </li>
        </Router>*/}
          
        </ul>
      </div>
    </nav>
  </header>
</div>

        )
    }
}

export default Header;