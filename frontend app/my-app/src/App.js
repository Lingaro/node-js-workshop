import React, { Component } from 'react';
import HotTable from 'react-handsontable';
import './App.css';
import axios from 'axios';

import {regexpValidator, combineValidators, isRequired} from './validator';

const runValidation = (validator) => (value, callback) => callback(validator(value));

class App extends Component {
  constructor() {
    super();
    this.handsontableData = [
      ['kowalkij', 'Jan', 'Kowalski'],
      ['nowakk', 'Karol', 'Nowak']
    ];

    this.columns = [
      {validator: runValidation(
        combineValidators(
          regexpValidator(/^[a-z]+$/),
          isRequired
        )
       )},
      {},
      {}
    ]
  }

  sendDataToServer = () => {
    axios.post('http://localhost:3000/api/app-data', this.handsontableData)
      .then(resp => console.log(resp))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to my-app</h1>
        </header>
        <div className="content">
          <HotTable data={this.handsontableData} columns={this.columns} colHeaders={['Username', 'First name', 'Last name']} />
        </div>
        <div className="content">
          <button type="button" className="btn btn-primary" onClick={this.sendDataToServer}>Send to server</button>
        </div>
      </div>
    );
  }
}

export default App;
