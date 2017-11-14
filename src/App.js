import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import './startbootstrap-clean-blog-gh-pages/css/clean-blog.css';
import RecipyContainer from './containers/RecipyContainer'
import {Route, Switch } from 'react-router-dom'
import NavBar from './components/Nav/NavBar'
import RecipySearch from './components/RecipySearch'
import RecipyList from './components/RecipyList'
import RecipyHome from './components/RecipyHome'
import RecipyFavorites from './components/RecipyFavorites'
// import RecipyFavorites from './components/RecipyFavorites'

class App extends Component {
  render() {
    return (
      <div className="App">

        <NavBar />
        <div className='Main'>
          <Switch>
            <Route exact path='/' component={RecipyHome} />
            <Route path='/search' component={RecipyContainer} />
            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
