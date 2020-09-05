import React from 'react';
import './App.scss';
import Header from './Components/Header/Header.js';
import Main from './Components/Main/Main.js';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/:movieid" component={Main} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
