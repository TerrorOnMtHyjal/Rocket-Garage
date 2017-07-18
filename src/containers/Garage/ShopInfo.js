import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.primary};
  font-family: 'Open Sans', sans-serif;
  border-bottom: 2px solid ${props => props.theme.highlight1};
`;

const Content = styled.div`
  display: flex;
  width: 70%;
`;

const Headers = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-flow: column;
  margin: 2em 0;
`;

const OwnerInfo = styled.p`
  color: ${props => props.theme.highlight2};
  font-weight: 700;
`;

const ShopHeader = styled.h2`
  margin-bottom: 10px;
`;

const ShopSubheader = styled.p`
  font-family: 'Roboto Slab', serif;
`;

const Controls = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;

  > p {
    color: ${props => props.theme.highlight2};
    font-weight: 700;
    font-size: 1.2em;
  }

`;

class ShopInfo extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Headers>
            <OwnerInfo>OWNER INFO</OwnerInfo>
            <ShopHeader>The Greatest Dealmaker's Shop, Son!</ShopHeader>
            <ShopSubheader>Everything I have posted is available for trade if you want to make an offer add me on steam and I’ll get back to you.</ShopSubheader>
          </Headers>
          <Controls>
            <p>SEARCH GARAGE</p>
            <p>CONTACT USER</p>
          </Controls>
        </Content>
      </Wrapper>
    );
  }
}

export default ShopInfo;