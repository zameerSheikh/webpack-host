import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Sidebar from "remote/Sidebar";
import Footer from "remote/Footer";
import Dashboard from "remote/Dashboard";

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
              <Route path="/profile" element={<Profile />} />
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
