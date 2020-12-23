import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  
  render() {
    return (
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
          BPS System
        </Link>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>
      
    );
  }
}

