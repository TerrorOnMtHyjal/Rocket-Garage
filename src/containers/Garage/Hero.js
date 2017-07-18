import React, { Component } from 'react';
import OwnerCard from './OwnerCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  position: relative;
  background-color: ${props => props.theme.main};

  &:before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.1;
    background-color: ${props => props.theme.highlight1};
    background-image: url('http://i.imgur.com/HFFvE7U.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 55%;
    background-blend-mode: luminosity;
  }
`;

class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <OwnerCard></OwnerCard>
      </Wrapper>
    );
  }
}

export default Hero;