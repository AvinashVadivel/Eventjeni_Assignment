import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

import "../../App.css"

function SearchBar() {
  return (
    <div id="hero-full-width">
      <img src="https://www.active.com/asset_pipeline/hero/a3-hero-2020-gift-guide-352c17ba1e5167f280a08722696027bc.png" className="hidden"></img>
    <div className="searchBar">
        <label>What's Your Active?</label>
        <input type="text" placeholder="Search activities, articles, guides..."></input>
        <button><SearchIcon /></button>
    </div>
    </div>
  )
}

export default SearchBar;
