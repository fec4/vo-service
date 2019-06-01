import React from 'react';

const Map = (props) => (
  <div className="mapbox-container mapbox">
    <div className="mapbox-map biz-map-directions">
      <img src={props.location.mapPicture} style={{height: 135 + 'px', width: 286 + 'px'}}></img>
    </div>
    <div className="mapbox-text">
      <ul>
        <li className="u-relative">
          <span aria-hidden="true" style={{height: 18 + 'px', width: 18 + 'px'}} className="icon icon--18-marker icon--size-18 u-absolute u-sticky-top">
            <svg role="img" className="icon_svg">
              <svg id="18x18_marker" height="100%" viewBox="0 0 18 18" width="100%">
                <path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
              </svg>
            </svg>
          </span>
          <a className="link-more icon-wrapper mapbox-edit">
            <span aria-hidden="true" style={{height: 14 + 'px', width: 14 + 'px'}} className="icon icon--14-pencil icon--size-14 icon--linked u-space-r-half">
              <svg role="img" className="icon_svg">
                <svg id="14x14_pencil" height="100%" viewBox="0 0 14 14" width="100%">
                  <path d="M12.95 3.05c0-.512-.195-1.023-.586-1.414a1.996 1.996 0 0 0-2.83 0L8.122 3.05 2.465 8.707 1.05 12.95l4.243-1.414L10.95 5.88l1.414-1.416c.39-.39.586-.902.586-1.414zm-8.197 7.61l-2.122.71.71-2.123 5.49-5.49 1.415 1.415-5.49 5.49z"></path>
                </svg>
              </svg>
            </span>
            <span>Edit</span>
          </a>
          <div className="map-box-address u-space-l4">
            <strong className="street-address">
              <address>
                {props.location.address}<br></br>{props.location.city}, {props.location.state} {props.location.zip}
              </address>
            </strong>
            <span className="cross-streets">
              b/t 5th St &amp; Cyril Magnin St
            </span>
            <br></br>
            <span className="neighborhood-str-list">
              Union Square
            </span>
          </div>
        </li>
        <li className="clearfix">
          <div>
            <span aria-hidden="true" style={{height: 18 + 'px', width: 18 + 'px'}} className="icon icon--18-directions icon--size-18">
              <svg role="img" className="icon_svg">
                  <svg id="18x18_directions" height="100%" viewBox="0 0 18 18" width="100%">
                    <path d="M16.444 7.556l-5.957-5.958a2.145 2.145 0 0 0-3.034 0L1.598 7.453a2.145 2.145 0 0 0 0 3.034l5.958 5.957a2 2 0 0 0 2.828 0l6.06-6.06a2 2 0 0 0 0-2.828zM9.97 11.47v-2.5h-3v3h-1v-4h4v-2.5l3 3-3 3z"></path>
                  </svg>
              </svg>
            </span>
            <a className="biz-directions">Get Directions</a>
          </div>
        </li>
        <li>
          <span aria-hidden="true" style={{height: 18 + 'px', width: 18 + 'px'}} className="icon icon--18-phone icon--size-18">
            <svg role="img" className="icon_svg">
                <svg id="18x18_phone" height="100%" viewBox="0 0 18 18" width="100%">
                  <path d="M15.862 12.526l-2.91-1.68a.442.442 0 0 0-.486.087l-1.58 1.687a.857.857 0 0 1-.52.232s-1.083.03-3.13-1.985c-2.046-2.015-2.054-3.12-2.054-3.12 0-.17.094-.41.21-.533L6.85 5.656a.49.49 0 0 0 .08-.504L5.295 2.14c-.073-.155-.228-.18-.345-.058L2.26 4.924a1.07 1.07 0 0 0-.248.53s-.34 2.927 3.75 6.955c4.093 4.025 6.96 3.59 6.96 3.59.167-.027.4-.148.516-.27l2.684-2.845c.117-.123.09-.285-.062-.36z"></path>
                </svg>
            </svg>
          </span>
          <span className="biz-phone"> {props.location.phone} </span>
        </li>
        <li>
          <span aria-hidden="true" style={{height: 18 + 'px', width: 18 + 'px'}} className="icon icon--18-external-link icon--size-18">
            <svg role="img" className="icon_svg">
                <svg id="18x18_external_link" height="100%" viewBox="0 0 18 18" width="100%">
                  <path d="M14 15H4c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3v1H4v10h10v-3h1v3c0 .55-.45 1-1 1zm-5.12-4.465L7.463 9.12l3.83-3.827L9 3h6v6l-2.293-2.293-3.828 3.828z"></path>
                </svg>
            </svg>
          </span>
          <span className="biz-website js-biz-website js-add-url-tagging">
            <a target="blank">hackreactor.com</a>
          </span>
        </li>
        <li className="clearfix">
          <div>
            <span aria-hidden="true" style={{height: 18 + 'px', width: 18 + 'px'}} className="icon icon--18-mobile icon--size-18">
              <svg role="img" className="icon_svg">
                <svg id="18x18_mobile" height="100%" viewBox="0 0 10 16" width="100%">
                  <path d="M9 16H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM9 2.463A.463.463 0 0 0 8.537 2H1.463A.463.463 0 0 0 1 2.463v11.074c0 .256.207.463.463.463h7.074A.463.463 0 0 0 9 13.537V2.463zM5 13.5a1.15 1.15 0 1 1 0-2.3 1.15 1.15 0 0 1 0 2.3z"></path>
                </svg>
              </svg>
            </span>
            <a className="js-biz-to-phone">Send to your Phone</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default Map;