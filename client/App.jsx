import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import LeftHeader from './src/components/LeftHeader.jsx';
import RightHeader from './src/components/RightHeader.jsx';
import Map from './src/components/Map.jsx';
import Gallery from './src/components/Gallery.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessInfo: {
        name: 'Hack Reactor',
        rating: 5,
        reviews: 191,
        genre: 'Vocational & Technical School'
      },
      completeAddress: {
        address: '944 Market St',
        city: 'San Francisco',
        state: 'CA',
        zip: 94102,
        phone: '(415) 268-0355',
        mapPicture: 'https://maps.googleapis.com/maps/api/staticmap?scale=2&center=37.783548%2C-122.408953&language=None&zoom=15&markers=scale%3A2%7Cicon%3Ahttps%3A%2F%2Fyelp-images.s3.amazonaws.com%2Fassets%2Fmap-markers%2Fannotation_64x86.png%7C37.783548%2C-122.408953&client=gme-yelp&sensor=false&size=286x135&signature=Qpro6hOlc3Tc9Uswmcx2v-AFUac='
      },
      pictures: ['https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500']
    }

  }



  render () {
    return (
      <div className="content-container js-biz-details">
        <div className="biz-header biz-page-header clearfix">
          <LeftHeader info={this.state.businessInfo} />
          <RightHeader />
        </div>
        <div className="biz-sub-header biz-page-subheader">
          <Map location={this.state.completeAddress} />
          <Gallery pictures={this.state.pictures} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));