import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  color: white;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  z-index: 2;
`;

const OwnerIcon = styled.img`
  border-radius: 75px;
  height: 150px;
  width: 150px;
`;

const OwnerName = styled.p`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
`;

const ActiveDate = styled.p`
  font-size: 1rem;
  font-weight: 600;
  font-style: italic;
  color: ${props => props.theme.highlight1};
`;

class OwnerCard extends Component {
  render() {
    return (
      <Wrapper>
        <OwnerIcon src="https://s-media-cache-ak0.pinimg.com/originals/8a/a4/58/8aa4587f399fd01c50d47f320dd9485a.png"/>
        <OwnerName>TheGreatGambino</OwnerName>
        <ActiveDate>Since August 2017</ActiveDate>
      </Wrapper>
    );
  }
}

export default OwnerCard;