import React from 'react';
import Card, { H2 } from '../Card';
import ItemTable from '../ItemTable';

const ToppingsTable = ({ toppings}) => (
  <Card title = {(<H2>Toppings</H2>)}>
    <ItemTable item = { toppings } />
  </Card>
);
  
export default ToppingsTable;