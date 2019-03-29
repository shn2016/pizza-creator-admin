import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from "history";
import PizzaCreatorAdmin from './components/PizzaCreatorAdmin';
import "./main.css"

ReactDOM.render(
  (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <PizzaCreatorAdmin basename={process.env.PUBLIC_URL}/>
    </BrowserRouter>
  ),
  document.querySelector('#app')
);