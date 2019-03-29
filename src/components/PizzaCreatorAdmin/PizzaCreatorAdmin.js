import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topping from '../Topping';
import Size from '../Size';

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
      <Switch>
      <Route
          exact
          path={process.env.PUBLIC_URL+"/"} 
          component={Topping}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL+"/topping"} 
          component={Topping}
        />
        <Route
          exact
          path={process.env.PUBLIC_URL+"/size"} 
          component={Size}
        />
        <Route
          render = {() => (
            <div>Error, this page cannot be found</div>
          )}
        />
      </Switch>
    </Content>
  </App>
);

export default PizzaCreatorAdmin;