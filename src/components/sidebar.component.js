import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiFile } from "react-icons/fi";
import { Button, Collapse } from 'react-bootstrap';
import $ from 'jquery';

export default class Navbar extends Component {

  componentDidMount() {
    $('#collapseOne').collapse({
      toggle: true
    })
  }

  render() {
    return (
      <nav id="sidebarMenu" classname="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div classname="position-sticky pt-3">
          <div className="accordion" id="accordionExample">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Collapsible Group Item #1
            </button>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div>
          <ul classname="nav flex-column">
            <li classname="nav-item">
              <link to="/" classname="nav-link active" aria-current="page" />
              <soan className="fi fihome"></soan> Dashboard
            </li>
            <li classname="nav-item">
              <link to="/expenses" classname="nav-link" />
              <fifile> ค่าใช้จ่าย
              </fifile>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="shopping-cart" />
                Products
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="users" />
                Customers
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="bar-chart-2" />
                Reports
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="layers" />
                Integrations
              </a>
            </li>
          </ul>
          <h6 classname="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Saved reports</span>
            <a classname="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle" />
            </a>
          </h6>
          <ul classname="nav flex-column mb-2">
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="file-text" />
                Current month
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="file-text" />
                Last quarter
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="file-text" />
                Social engagement
              </a>
            </li>
            <li classname="nav-item">
              <a classname="nav-link" href="#">
                <span data-feather="file-text" />
                Year-end sale
              </a>
            </li>
          </ul>
        </div>
      </nav>
     

    );
  }
}



