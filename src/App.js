import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchBoxRecipes from './Components/SearchBox'
import RecipesItems from './Components/RecipeItems'
import ListData from './ListData'
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/recipes" component={RecipesItems} />
      <Route path="/" component={SearchBoxRecipes} />

      </Switch>
      </Router>
    
  {/* <List /> */}
      
    </div>
  );
}

export default App;
