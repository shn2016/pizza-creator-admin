import React from 'react';
import styled from 'styled-components';
import Sidebar from '../Sidebar';
import Topping from '../Topping';

const App = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
`;

const Content = styled.div`
  padding: 2rem 2rem 2rem 4rem;
`;

const PizzaCreatorAdmin = () => (
  <App>
    <Sidebar />
    <Content>
      <Topping />
    </Content>
  </App>
);

export default PizzaCreatorAdmin;