import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import RouterApp from './RouterApp';


const defaultTheme = {
  main: '#0e0816',
  primary: '#e7dfdd',
  highlight1: '#a139c9',
  highlight2: '#4717f6',
  rarity: {
    Common: '#444',
    Exotic: '#ecdb6c',
    Import: '#e35a52',
    Limited: '#f77939',
    Premium: '#6bf1ae',
    Rare: '#7497eb',
    SuperRare: '#956bf2',
    Uncommon: '#7dd9fd',
    VeryRare: '#9e7cfc'
  }
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <RouterApp />
      </ThemeProvider>
    );
  }
}