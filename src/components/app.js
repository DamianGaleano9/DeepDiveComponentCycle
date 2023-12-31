import React, { Component } from 'react';
import Navigation from './navigation';
import PageContent from './page-content';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>React Redux Router</h2>
        <Navigation/>
        <PageContent/>
      </div>
    );
  }
}
