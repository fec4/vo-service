import React, { Component } from 'react';

export default class RightHeader extends Component {
  render() {
    return (
      <div className="right-container">
        <button type="button"><img src="https://www.britishtitanicsociety.com/wp-content/uploads/2013/07/cropped-whiteStarFavicon.jpg" alt="white star"></img>Write a Review</button>
        <div className="right-container-buttons">
          <button type="button"><img src="https://media.istockphoto.com/vectors/camera-simple-icon-vector-id827604202?b=1&k=6&m=827604202&s=170x170&h=Nqr_1PNl8XFxMvNfSSzeRx7xZoHWt11Q8H7_qV7hVag=" alt="camera favicon"></img> Add Photo</button>
          <button type="button"><img src="https://image.flaticon.com/icons/png/128/1159/1159763.png" alt="share favicon"></img> Share</button>
          <button type="button"><img src="https://lh3.googleusercontent.com/cooJQDQeWh9UYFxRF0HrhDezVyGAzsD23MMUd45OloPod-LOGOWk_Pi765ALx0JBR8WEfZs2lQ=w128-h128-e365" alt="save favicon"></img> Save</button>
        </div>
      </div>
    )
  }
}