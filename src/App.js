import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} modeStyle={modeStyle} toggleMode={toggleMode} darkModeColorHidden={darkModeColorHidden} />
        <Alert alert={alert} updateAlert={updateAlert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element = {<About />} />

            <Route path="/" element = {<TextForm heading="Enter your text below" mode={mode} modeStyle={modeStyle} updateAlert={updateAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
