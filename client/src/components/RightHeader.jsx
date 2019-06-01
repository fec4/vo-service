import React, { Component } from 'react';

export default class RightHeader extends Component {
  render() {
    return (
      <div className="right-container biz-page-header-right u-relative biz-page-actions nowrap">
        <a className="ybtn ybtn--primary war-button">
            <span aria-hidden="true" style={{width: 24 + 'px', height: 24 + 'px'}} className="icon icon--24-star icon--size-24 icon--currentColor u-space-r-half icon--fallback-inverted">
              <svg role="img" className="icon_svg">
                  <svg id="24x24_star" height="100%" viewBox="0 0 24 24" width="100%">
                    <path d="M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z"></path>
                  </svg>
              </svg>
            </span> Write a Review
        </a>
        <div className="right-container-buttons ybtn-group clearfix js-save-to-collection u-flex">
          <a className="ybtn ybtn--small ybtn--secondary add-photo-button">
            <span aria-hidden="true" style={{width: 18 + 'px', height: 18 + 'px'}} className="icon icon--18-add-photo icon--size-18 icon--currentColor">
              <svg role="img" className="icon_svg">
                  <svg id="18x18_add_photo" height="100%" viewBox="0 0 18 18" width="100%">
                    <path d="M15 15H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2zM9 4.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM11 10h-1v1a1 1 0 0 1-2 0v-1H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2z"></path>
                  </svg>
              </svg>
            </span>
              Add Photo
          </a>
          <div className="send-to-friend-wrapper">
            <button className="button__373c0__3yl_n small__373c0__1sSnK secondary__373c0__3Q2Us action-bar-button__373c0__3VxNd" style={{ '--mousedown-x': 0 + 'px', '--mousedown-y': 0 + 'px', '--button-width': 0 + 'px'}} type="submit" value="submit">
              <span className="lemon--span__373c0__3997G text__373c0__2pB8f text-color--inherit__373c0__w_15m text-align--center__373c0__2vkq2 text-size--inherit__373c0__2gFQ3">
                <span className="lemon--span__373c0__3997G icon__373c0__ehCWV icon--18-share" aria-hidden="true" style={{width: 18 + 'px', height: 18 + 'px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" className="icon_svg">
                    <path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z">
                    </path>
                  </svg>
                </span> Share
              </span>
            </button>
          </div>
          <div className="ybtn ybtn--small ybtn--secondary js-show-modal">
            <span aria-hidden="true" style={{width: 14 + 'px', height: 14 + 'px'}} className="icon icon--14-save icon--size-14 icon--currentColor">
              <svg role="img" className="icon_svg">
                  <svg id="14x14_save" height="100%" viewBox="0 0 14 14" width="100%"><path d="M9 1H5a2 2 0 0 0-2 2v10l4-3 4 3V3a2 2 0 0 0-2-2z"></path></svg>
              </svg>
            </span>
            <span className="save-text">
                    Save
            </span>
          </div>
        </div>
      </div>
    )
  }
}