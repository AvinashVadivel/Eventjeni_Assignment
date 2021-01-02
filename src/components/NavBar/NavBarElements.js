import React, { useState } from 'react'
import ReorderIcon from '@material-ui/icons/Reorder'

import "../../App.css"
import "../ActivePost/ActiveBlogPost"

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const formatImage = (() => {
    setShowLinks(!showLinks);
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Active.com</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link active dropdown-toggle" aria-current="page" href="#" id="runAndSport" role="button" data-bs-toggle="dropdown" aria-expanded="false">Running & Sports</a>
              <ul className="dropdown-menu" aria-labelledby="runAndSport">
                <li><a className="dropdown-item" href="#">Running</a></li>
                <li><a className="dropdown-item" href="#">Cycling</a></li>
                <li><a className="dropdown-item" href="#">Triathlon</a></li>
                <li><a className="dropdown-item" href="#">Sports</a></li>
                <li><a className="dropdown-item" href="#">Find a Sports Camp</a></li>
                <li><a className="dropdown-item" href="#">Browse all Activities</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="kidsAndFamily" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kids & Family</a>
              <ul className="dropdown-menu" aria-labelledby="kidsAndFamily">
                <li><a className="dropdown-item" href="#">Find Camps & Activities For Your Active Kids</a></li>
                <li><hr className="dropdown-divider"></hr></li>
                <li><a className="dropdown-item" href="#">Infants(0-1)</a></li>
                <li><a className="dropdown-item" href="#">Toddlers(2-4)</a></li>
                <li><a className="dropdown-item" href="#">Big Kids(5-8)</a></li>
                <li><a className="dropdown-item" href="#">Tweens(9-12)</a></li>
                <li><a className="dropdown-item" href="#">Teens(13-18)</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fitness & Health</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Fitness</a></li>
                <li><a className="dropdown-item" href="#">Nutrition</a></li>
                <li><a className="dropdown-item" href="#">Calculators</a></li>
                <li><a className="dropdown-item" href="#">Outdoor Activities</a></li>
                <li><a className="dropdown-item" href="#">Outdoor Guides</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="train" role="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">Training</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Running Tips</a></li>
                <li><a className="dropdown-item" href="#">Cycling Tips</a></li>
                <li><a className="dropdown-item" href="#">Triathlon Training</a></li>
                <li><a className="dropdown-item" href="#">Sport Tips & Advice</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Go Premium</a>
            </li>
          </ul>
          <form className="d-flex">
          <button className="btn btn-outline-success" type="submit">Sign Up</button>
            <button className="btn btn-outline-success" type="submit">Sign In</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
