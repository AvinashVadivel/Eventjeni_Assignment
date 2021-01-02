import React, { useState } from 'react'

import "../../App.css"

function FilterBar() {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className="NavBar FilterBar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <label className="when">When</label>
                    <label>Where</label>
                    <label>Who</label>
                    <label>Activities</label>
                </div>
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="filter" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter Option</a>
                    <ul className="dropdown-menu" aria-labelledby="filter">
                        <li><a className="dropdown-item" href="#">Sort</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li><a className="dropdown-item" href="#">When</a></li>
                        <li><a className="dropdown-item" href="#">Where</a></li>
                        <li><a className="dropdown-item" href="#">Who</a></li>
                        <li><a className="dropdown-item" href="#">Activities</a></li>
                        <li><hr className="dropdown-divider"></hr></li>
                        <li className="checkbox-option">
                            <input type="checkbox"></input>
                            <label>Include Virtual Events</label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rightSide">
                <input type="checkbox"></input>
                <label>eligible</label>
            </div>
        </div>
    )
}

export default FilterBar;
