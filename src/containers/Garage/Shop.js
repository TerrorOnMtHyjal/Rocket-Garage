import React, { Component } from 'react';
import styled from 'styled-components';
import Item from '../../components/Item';
import Deal from '../../components/Deal';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.main};
`;

const Content = styled.div`
  margin-top: 40px;
  display: flex;
  width: 70%;
`;

const Inventory = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  color: white;
`;

const Deals = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
`;

const StyledItem = styled(Item)`
  border: 1px solid white;
  color: green;
  background-color: red;
`;

const deals = [
  {
    age: "2 Hours Ago",
    have: [
      {
        rarity: "Uncommon",
        cert: "Playmaker",
        name: "OEM"
      },
      {
        rarity: "Import",
        name: "Dominus GT"
      }
    ],
    want: [
      {
        rarity: "Import",
        name: "Endo"
      }
    ]
  },
  {
    age: "5 Hours Ago",
    have: [
      {
        rarity: "Premium",
        name: "Depth Breaker"
      },
      {
        rarity: "Very Rare",
        name: "Freakazoid"
      },
      {
        rarity: "Uncommon",
        name: "Biomass"
      },
      {
        rarity: "Import",
        name: "Takumi RX-T"
      },
    ],
    want: [
      {
        rarity: "Premium",
        name: "Fleck"
      },
      {
        rarity: "Common",
        name: "Key"
      },
    ]
  }

];

class Shop extends Component {
  render() {
    return (
      <Wrapper>
        <Content>
          <Inventory>
            {this.props.items.map(item => <StyledItem item={item} key={item.uiid}/>)}
          </Inventory>
          <Deals>
            {deals.map(deal => <Deal dealDetails={deal}/>)}
          </Deals>
        </Content>
      </Wrapper>
    );
  }
}

export default Shop;