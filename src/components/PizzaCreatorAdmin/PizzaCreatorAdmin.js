import React from 'react';
import Sidebar from '../Sidebar';
import './PizzaCreatorAdmin.css';
import Topping from '../Topping';

const PizzaCreatorAdmin = () => (
  <div className="app">
    <Sidebar />
    <div className='content'>
    <div>Hello~~~ddd</div>
      <Topping />
    </div>
  </div>
);

export default PizzaCreatorAdmin;