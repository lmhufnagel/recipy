import React from 'react'
import RecipyContainer from '../containers/RecipyContainer'
import './css/list.css'

const RecipyList = (props) => {

  return (
    <div>
      {props.recipes.map((recipe, index) =>{
        return<div className='card' key={index}>
        <a href={recipe.source_url}>
          <img src={recipe.image_url} id="image"/><br></br>
        </a>
        <div className="container">
        <a href={recipe.source_url} className="title-link">{recipe.title}</a><br></br>
        </div>

        </div>
      })}
    </div>
  )

}

export default RecipyList
