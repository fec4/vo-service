import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import $ from 'jquery';
import LeftHeader from './components/LeftHeader.jsx';
import RightHeader from './components/RightHeader.jsx';
import Map from './components/Map.jsx';
import Gallery from './components/Gallery.jsx';

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
    return (
      <div class="content-container">
        <div class="biz-header">
          <LeftHeader info={this.state.businessInfo} />
          <RightHeader />
        </div>
        <div class="biz-sub-header">
          <Map location={this.state.completeAddress} />
          <Gallery pictures={this.state.pictures} />
        </div>
      </div>
    )
  }
}

export default hot(module)(App);