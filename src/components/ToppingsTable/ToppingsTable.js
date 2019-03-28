import React from 'react';
import styled from 'styled-components';
import Card, { H2 } from '../Card';
import Button from '../Button';

const Table = styled.table`
  --padding: 1rem;
  width: 100%;
  text-align: left;
  border-radius: 4px 4px 0 0;
  border-collapse: collapse;
`
const Th = styled.th`
  padding: var(--padding);
  color: rgba(0,0,0,.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
`
const Td = styled.td`
  padding: var(--padding); 
  border-bottom: 1px solid #e8e8e8;
`
 

const TableTdImg = styled.img`
  width: 50px;
  height: 50px;
`;

class ToppingsTable extends React.Component {
  render() {
    const { toppings } = this.props;

    return (
      <Card title={(<H2>Toppings</H2>)}>
          <Table>
            <thead>
              <tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {toppings.map(({
                id, name, price, imageUrl
              }) => (
                <tr key={ id }>
                  <Td>
                    <TableTdImg src={ imageUrl } alt={ name } />
                  </Td>
                  <Td>{ name }</Td>
                  <Td>$ { price }</Td>
                  <Td className="action">
                    <Button>Update</Button>
                    &nbsp;
                    <Button color="danger">Delete</Button>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
      </Card>
    );
  }
};

export default ToppingsTable;