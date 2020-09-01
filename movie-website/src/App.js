import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import Header from './Components/Header/Header.js';
import Search from './Components/Search/Search.js';
import NominationList from './Components/NominationList/NominationList.js';

function App() {
  return (
      <>
      <Header />
      <BrowserRouter>
      <Search/>
      <NominationList/>
      </BrowserRouter>
      </>
  );
}

export default App;
