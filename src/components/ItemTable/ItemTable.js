import React from 'react';
import styled from 'styled-components';
import Button from '../Button';

const Table = styled.table`
  --padding: 1rem;
  width: 100%;
  text-align: left;
  border-radius: 4px 4px 0 0;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: var(--padding);
  color: rgba(0,0,0,.85);
  font-weight: 500;
  text-align: left;
  background: #fafafa;
  border-bottom: 1px solid #e8e8e8;
`;

const Td = styled.td`
  padding: var(--padding); 
  border-bottom: 1px solid #e8e8e8;
`;
 
const TableTdImg = styled.img`
  width: 50px;
  height: 50px;
`;

class ItemTable extends React.Component {
  render() {
    const { item } = this.props;

    return (
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
              {item.map(({
                id, name, price, image
              }) => (
                <tr key={ id }>
                  <Td>
                    <TableTdImg src={ image } alt={ name } />
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
    );
  }
};

export default ItemTable;