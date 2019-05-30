import React from 'react';

const LeftHeader = (props) => (
  <div class="left-container">
    <div class="business-title">
      <h1>{props.info.name}</h1>
      <div class="claimed-container">
        <span><img></img></span>
        Claimed
      </div>
    </div>

    <div class="reviews-container">
      <div><img>STARS</img></div>
      <span class="review-count">{props.info.reviews}</span>
      <a class="chiclet-link">Details</a>
    </div>

    <div class="category-container">
      <a class="genre-link">{props.info.genre}</a>
      <a class="chiclet-link">Edit</a>
    </div>
  </div>
)

export default LeftHeader;
