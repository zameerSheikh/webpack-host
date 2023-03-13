import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "remote/Sidebar";
import Footer from "remote/Footer";
import Dashboard from "remote/Dashboard";

import "./index.scss";
import "./App.css";

const App = () => (
  <div className="container">
    <Sidebar />
    <div className="main">
      <main>
        <Dashboard />
      </main>
      <Footer />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
