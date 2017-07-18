import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  width: 48%;
  align-self: start;
  margin-bottom: 10px;
  margin-right: 2%;
`;

const PriceTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  min-height: 50px;
  background-color: ${props => props.theme.rarity[props.rarity]};
  margin-right: 10px;
`;

const Price = styled.p`
  color: ${props => props.theme.main};
`;

const ItemDetails = styled.div` 
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

const ItemName = styled.p`

`;

const ItemCert = styled.p`
  font-weight: 300;
  font-style: italic;
`;

class Item extends Component {
  render() {

    const rarity = this.props.item.rarity.replace(/\s+/g, '');

    return (
      <Wrapper>

        <PriceTag rarity={rarity}> 
          <Price>0.25</Price>
        </PriceTag>
        
        <ItemDetails>
          <ItemName>{this.props.item.name}</ItemName>
          {this.props.item.cert ? <ItemCert>{this.props.item.cert}</ItemCert> : undefined}
        </ItemDetails>
      </Wrapper>
    );
  }
}

export default Item;