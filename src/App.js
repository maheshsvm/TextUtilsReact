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

//rfce --> to import react function based component
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [darkModeColorHidden, setDarkModeColorHidden] = useState(true)

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = '#222528';
      updateAlert("Routesed to dark mode", "success");
      setDarkModeColorHidden(false);

      // for blinking the title -- bad user experience
      // setInterval(() => {
      //   document.title = 'text utils is amazing'

      // }, 200);

      // setInterval(() => {
      //   document.title = 'Install text utils now'
      // }, 150);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      updateAlert("Routesed to light mode", "success");
      setDarkModeColorHidden(true);
    }
  }


  let modeStyle = {
    color: mode === 'dark' ? "white" : "black"
  }

  const updateAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

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