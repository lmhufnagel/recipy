import React, { Component } from 'react'
import NavBar from '../components/Nav/NavBar'
import RecipySearch from '../components/RecipySearch'
import RecipyList from '../components/RecipyList'
import RecipyFavorites from '../components/RecipyFavorites'
// import RecipyCard from '../components/RecipyCard'


const apiKey = "1fb8162c409560a5761d441b47415187"

class RecipyContainer extends Component {

  state = {
    recipes: [],
    searchedRecipes: [],
    searchTerm: '',
    selectedRecipe: [],
    favorites: []
  }



  handleChange = (event) => {
    event.preventDefault()

    if (event.target.value === "" || null){
      this.setState({
        searchTerm: event.target.value,
        searchedRecipes: this.state.recipes
      })
    } else {
      let searchingRecipes = this.state.recipes.filter(recipe => (recipe.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
      this.setState({
        searchTerm: event.target.value,
        searchedRecipes: searchingRecipes

      })
    }

  }

  handleSelection = (event) => {
    event.preventDefault()
    // if favoriteButton is clicked add obj to favorites array
    const selected = this.recipe
    this.setState({favorites: [...this.state.favorites, selected]})
  }


  componentDidMount(){
    fetch(`https://community-food2fork.p.mashape.com/search?key=1fb8162c409560a5761d441b47415187&q=${this.state.searchTerm}`,
      {
        'headers':
        {
          'X-Mashape-Key': 'um4LbSiDMBmsh0Og2z436LFQ2rWOp1pqqchjsnez42ej666z6g',
          'accept': 'application/json'
        }
      })
    .then(r => r.json())
    .then(json => {
      this.setState({
        recipes: json.recipes,
        searchedRecipes: json.recipes
    })
  })
  }



  render(){
    console.log(this.state.favorites);
    return(
      <div id="body">
        <RecipySearch id="search" recipes={this.state.searchedRecipes} searchTerm={this.state.searchTerm} handleChange={this.handleChange}/>
        <RecipyList id="list" recipes={this.state.searchedRecipes} searchTerm={this.state.searchTerm}/>
        <RecipyFavorites id='favorites' favorites={this.state.favorites} handleSelection={this.handleSelection}/>
      </div>
    )
  }

}
export default RecipyContainer;
