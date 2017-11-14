import React from 'react'
import './css/search.css'

const RecipySearch = (props) => {
  return (
    <div className="search">


      <input
        type="text"
        placeholder={"Search Recipes"}
        onChange={props.handleChange}
        value={props.searchTerm}
      />
    
    </div>
  )
}

export default RecipySearch
