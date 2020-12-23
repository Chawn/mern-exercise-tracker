import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Button, Collapse } from 'react-bootstrap';

import "/Users/chawput/Google Drive/dev/mern-bps/src/css/dashboard.css";
import { FiHome, FiFile } from "react-icons/fi";
import { Link } from 'react-router-dom';


import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import Sidebar from "./components/sidebar.component"
import Home from "./components/index.component";
import ExpensesList from "./components/expenses-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExpense from "./components/create-expense.component";
import CreateUser from "./components/create-user.component";
import './css/Style.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <Route path="/" exact component={Home} />
              <Route path="/expenses" exact component={ExpensesList} />
              <Route path="/edit/:id" component={EditExercise} />
              <Route path="/create" component={CreateExpense} />
              <Route path="/user" component={CreateUser} />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
