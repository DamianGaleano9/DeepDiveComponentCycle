import React, { Component } from 'react';
import Discussion from './discussion';
import Rules from './rules';
import Workflow from './workflow';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h2>React Redux Router</h2>
        <Discussion/>
        <Rules/>
        <Workflow/>
      </div>
    );
  }
}