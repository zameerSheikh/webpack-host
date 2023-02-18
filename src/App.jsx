import React from "react";
import ReactDOM from "react-dom";

import Sidebar from "remote/Sidebar";
import Footer from "remote/Footer";

import "./index.scss";

const App = () => (
  <div>
    <Sidebar />
    <main>
      <h3>Host</h3>
    </main>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
