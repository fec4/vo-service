import React from 'react';

const LeftHeader = (props) => (
  <div className="left-container biz-page-header-left claim-status">
    <div className="business-title">
      <h1 className="biz-page-title embossed-text-white shortenough">{props.info.name}</h1>
      <div className="claimed-container u-inline-block">
        <span aria-hidden="true" style={{ width: 18 + 'px', height: 18 + 'px'}} className="icon icon--18-checkmark-badged icon--size-18 icon--blue-dark claim-status_icon u-space-r1 claim-status_icon--claimed">
    	    <svg id="18x18_checkmark_badged" height="100%" viewBox="0 0 18 18" width="100%">
            <path d="M9 1a8 8 0 1 0 0 16A8 8 0 0 0 9 1zm3.96 6.28l-4.808 4.807-3.112-3.11a.8.8 0 1 1 1.13-1.132l1.982 1.98 3.677-3.677a.8.8 0 1 1 1.13 1.13z"></path>
          </svg>
	      </span>
        Claimed
      </div>
    </div>

    <div className="reviews-container biz-main-info embossed-text-white rating-info cleafix biz-rating biz-rating-very-large">
      <div className="i-stars i-stars--large-5 rating-very-large" title="5.0 star rating">
          <img className="offscreen" height="303" src="https://s3-media2.fl.yelpcdn.com/assets/srv0/yelp_design_web/9b34e39ccbeb/assets/img/stars/stars.png" width="84" alt="5.0 star rating"></img>
      </div>
      <span className="review-count rating-qualifier">{props.info.reviews} reviews</span>
      <a className="chiclet-link chiclet-link--with-text show-tooltip js-rating-details rating-details">
        <span aria-hidden="true" style={{ width: 14 + 'px', height: 14 + 'px'}} className="icon icon--14-histogram icon--size-14 icon--currentColor">
          <svg role="img" className="icon_svg">
            <svg id="14x14_histogram" height="100%" viewBox="0 0 14 14" width="100%">
              <path d="M9 11V5h2v6H9zM6 3h2v8H6V3zM3 7h2v4H3V7z"></path>
            </svg>
          </svg>
        </span>
        Details
      </a>
    </div>

    <div className="category-container price-category">
      <a className="genre-link category-str-list">{props.info.genre}</a>
      <a className="edit-business-button chiclet-link chiclet-link--with-text">Edit</a>
    </div>
  </div>
)

export default LeftHeader;
