import React from 'react';
import Card, { H2 } from '../Card';
import ItemTable from '../ItemTable';

 const SizeTable = ({ sizes }) => (
  <Card title = {(<H2>Size</H2>)}>
    <ItemTable item = { sizes } />
  </Card>
 )

export default SizeTable;