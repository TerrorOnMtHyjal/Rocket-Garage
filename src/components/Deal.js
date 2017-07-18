import React, { Component } from 'react';
import Item from './Item';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.main};
  margin-right: 20px;
  font-family: 'Open Sans', sans-serif;
`;

const DealHeader = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  font-weight: 300;
  font-style: italic;
`;

const Have = styled.div`
  display: flex;
  flex-flow: column;
`;

const Want = styled.div`
  display: flex;
  flex-flow: column;
`;

class Deal extends Component {
  render() {
    return (
      <Wrapper>
        <DealHeader>
          <p>{this.props.dealDetails.age}</p>
        </DealHeader>
        <Have>
          {this.props.dealDetails.have.map(item => <Item item={item} key={item.uiid}/>)}
        </Have>
        <Want>
          {this.props.dealDetails.want.map(item => <Item item={item} key={item.uiid}/>)}
        </Want>
      </Wrapper>
    );
  }
}

export default Deal;