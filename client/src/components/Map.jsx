import React from 'react';

const Map = (props) => (
  <div className="map-container">
    <div className="map-box">
      <img src={props.location.mapPicture}></img>
    </div>
    <div className="map-text">
      <ul>
        <li>{props.location.address} {props.location.city}, {props.location.state} {props.location.zip}</li>
        <li>b/t 5th St Cyril Magnin St</li>
        <li><a>Get Directions</a></li>
        <li>{props.location.phone}</li>
        <li><a>hackreactor.com</a></li>
        <li><a>Send to your Phone</a></li>
      </ul>
    </div>
  </div>
)

export default Map;