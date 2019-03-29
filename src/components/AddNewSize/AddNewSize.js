import React from 'react';
import Card, { H2 } from '../Card';
import AddNewItemForm from '../AddNewItemForm/AddNewItemForm';


const AddNewSize = ( { onNewSizeAdded }) =>  {
  return (
    <Card title ={(<H2>Add New Size</H2>)}>
      <AddNewItemForm  
        type = "sizes" 
        onNewItemAdded = {onNewSizeAdded}
      />
    </Card>
  );
}


export default AddNewSize;