import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Sidebar from "reactRemote/Sidebar";
import Footer from "reactRemote/Footer";
import Dashboard from "reactRemote/Dashboard";

import "./index.scss";
import "./App.css";
import Profile from "./Profile";
import Messages from "./Messages";
import Settings from "./Settings";
import About from "./About";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Sidebar />
      <div className="main">
        <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
