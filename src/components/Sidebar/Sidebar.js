import React from 'react';
import styled from 'styled-components';

const Side = styled.div`
  --padding: 1rem 2rem;
  background: #001529;
  color: white;
`;

const Brand = styled.div`
  background: #002140;
  display: flex;
  padding: var(--padding);
`;

const Menu = styled.div`
  display: grid;
  padding: var(--padding);
`;

const H1 = styled.h1`
  font-size: 1.5rem;
`

const A = styled.a`
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.5);

  :active {
    color: rgba(255, 255, 255, 1);
  }
`

const Sidebar = () => (
  <Side >
    <Brand>
      <H1>Pizza Creator Admin</H1>
    </Brand>
    <Menu>
      <A active="true">Topping</A>
      <A>Size</A>
    </Menu>
  </Side>
);

export default Sidebar;