import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const updatedarkModeColor = (e)=>{
    let id = e.target.id;
    if(id === 'purpleShade'){
      document.body.getElementsByClassName('navbar')[0].style.backgroundColor = '#1f2937';
      document.body.style.backgroundColor = ' rgb(17 24 39)';
    }
    else if(id === 'blackShade'){
      document.body.style.backgroundColor = '#222528';
    }
    else if(id === 'greenShade'){
      document.body.style.backgroundColor = 'rgb(13 84 34)';
    }
  }
  return (
    <nav className="navbar navbar-expand-lg  bg-body-tertiary" id='navbar'  data-bs-theme={`${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li>

        </ul>
          <div className="dark-mode-btn-container" hidden = {props.darkModeColorHidden}>
            <button className="btn btn-danger mx-2" onClick={updatedarkModeColor} id='blackShade'>Black</button>
            <button className="btn btn-danger mx-2" onClick={updatedarkModeColor} id='purpleShade'>Purple</button>
            <button className="btn btn-danger mx-2" onClick={updatedarkModeColor} id='greenShade'>Green</button>

          </div>
        <div className="form-check form-switch mx-3">
          <input className="form-check-input" type="checkbox" role="switch" onChange={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style = {props.modeStyle}>Set {props.mode === 'dark'?"Light":"Dark"} Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title : "title text" ,
    aboutText : "about text"
}