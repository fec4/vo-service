import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import $ from 'jquery';
import BizHeader from './components/BizHeader.jsx';
import BizSubHeader from './components/BizSubHeader.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessInfo: {
        name: '',
        rating: 0,
        reviews: 0,
        genre: '',
        mapPicture: ''
      },
      completeAddress: {
        address: '',
        city: '',
        state: '',
        zip: 0,
        phone: ''
      },
      pictures: []
    }

  }



  render () {
    return (<div>
      <BizHeader info={this.state.businessInfo}/>
      <BizSubHeader address={this.state.completeAddress}/>
    </div>)
  }
}

export default hot(module)(App);