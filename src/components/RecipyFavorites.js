import React from 'react'
import RecipyContainer from '../containers/RecipyContainer'
import './css/list.css'

const RecipyFavorites = (props) => {
console.log(props.favorites);
  return (
    <div>
     {props.favorites.map((recipe, index) =>{
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

export default RecipyFavorites
