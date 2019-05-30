import React from 'react';

const LeftHeader = (props) => (
  <div className="left-container">
    <div className="business-title">
      <h1>{props.info.name}</h1>
      <div className="claimed-container">
        <span><img src="https://s3-us-west-2.amazonaws.com/jumpermedia.co/uploads/2018/07/instagram-verified-symbol-768x768-1-300x300.png" alt="blue check"></img></span>
        Claimed
      </div>
    </div>

    <div className="reviews-container">
      <div>stars</div>
      <span className="review-count">{props.info.reviews} reviews</span>
      <a className="chiclet-link">Details</a>
    </div>

    <div className="category-container">
      <a className="genre-link">{props.info.genre}</a>
      <a className="chiclet-link">Edit</a>
    </div>
  </div>
)

export default LeftHeader;
