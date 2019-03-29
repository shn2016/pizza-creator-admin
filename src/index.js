import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import PizzaCreatorAdmin from './components/PizzaCreatorAdmin';
import "./main.css"

ReactDOM.render(
  (
    <HashRouter>
      <PizzaCreatorAdmin />
    </HashRouter>
  ),
  document.querySelector('#app')
);