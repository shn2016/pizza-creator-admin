import React from 'react';
import Card, { H2 } from '../Card';
import AddNewItemForm from '../AddNewItemForm/AddNewItemForm';


const AddNewTopping = ( { onNewToppingAdded }) =>  {
  return (
    <Card title ={(<H2>Add New Topping</H2>)}>
      <AddNewItemForm  
        type = "toppings" 
        onNewItemAdded = {onNewToppingAdded}
      />
    </Card>
  );
}


export default AddNewTopping;