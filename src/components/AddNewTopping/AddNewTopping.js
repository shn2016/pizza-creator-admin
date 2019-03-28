import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Card, { H2 } from '../Card';
import Button from '../Button';

const FormItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  grid-gap: 1rem;
`;

//input validation and label;
const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 32px;
  padding: 4px 11px;
  color: rgba(0,0,0,0.65);
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`

class AddNewTopping extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      topping: {
        type: "toppings",
      },
    };

    this.onToppingChange = this.onToppingChange.bind(this);
  }

  onToppingChange(key, value) {
    const { topping } = this.state;
    
    this.setState({
      topping: {
        ...topping,
        [key]: value,
      },
    });
  }

  render() {
    const { topping } = this.state;
    const { onNewToppingAdded } = this.props;

    return (
      <form 
        className="add-new-topping"
        onSubmit={(event) => {
          event.preventDefault();
          topping['price'] = parseFloat(topping.price);
          axios.post('https://pizza-admin-api.herokuapp.com/product', topping)
            .then(({ data }) => onNewToppingAdded(data))
        }}
      >
        <Card title ={(<H2>Add New Topping</H2>)}>
          <FormItems>
            <Input
              value={topping.image || ''} 
              onChange={({ target: { value } }) => this.onToppingChange('image', value)} 
              placeholder="Image URL" 
            />
            <Input
              value={topping.name || ''} 
              onChange={({ target: { value } }) => this.onToppingChange('name', value)} 
              placeholder="Name" 
            />
            <Input
              value={topping.price || ''} 
              onChange={({ target: { value } }) => this.onToppingChange('price', value)} 
              placeholder="Price" 
            />
          </FormItems>
          <br />
          <Button color='primary'>Add</Button>
        </Card>
      </form>
    );
  }
}

export default AddNewTopping;