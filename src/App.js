import React from 'react';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Recipe from './components/Recipe';
import Header from './components/Header';
import RecipesBrowse from './components/RecipesBrowse';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header>
          <Route
            path="*"
            render={props => <Header {...props} />}
          />
      </header> 
      
      <Switch>
        <Route
          exact
          path="/recipes"
          component={Recipes}
        />
        <Route
          exact
          path="/recipes/:name"
          component={RecipesBrowse}
        />
        <Route
          path="/recipe"
          component={Recipe}
        />
        <Route
          exact
          path="/"
          component={Home}
        />
      </Switch>
    </div>
  );
}

export default App;
