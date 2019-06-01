import React from 'react';

const Gallery = (props) => (
  <div className="carousel showcase-container">
    <div className="showcase-container_inner showcase showcase-3-photo">
      <div className="top-shelf-grey"></div>
      <div className="showcase-footer-links"></div>
      <div className="lightbox-media-parent">
        <div className="showcase-photos">
          <div className="js-photo photo photo-1">
            <div className="showcase-photo-box">
              <a href={props.pictures[0]}>
                <img className="photo-box-img" height="250" src={props.pictures[0]} srcSet="https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/258s.jpg 1.03x,https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/348s.jpg 1.39x,https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/300s.jpg 1.20x" width="250"></img>
              </a>
            </div>
            <div className="photo-box-overlay js-overlay">
              <div className="media-block photo-box-overlay_caption">
                <div className="media-avatar avatar">
                  <div className="photo-box pb-30s">
                    <a className="js-analytics-click">
                      <img className="photo-box-img" height="30" src={props.pictures[0]} srcSet="https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/60s.jpg 2.00x,https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/90s.jpg 3.00x,https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/ss.jpg 1.33x" width="30"></img>
                    </a>
                  </div>
                </div>
                <div className="media-story">
                  <a className="photo-desc">
                    HRR38 =P
                  </a>
                  <span className="author">
                    by
                    <a className="user-display-name js-analytics-click" id="dropdown_user-name">Michael V.</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="js-photo photo photo-2">
            <div className="showcase-photo-box">
              <a href={props.pictures[1]}>
                <img className="photo-box-img" height="250" src={props.pictures[1]} srcSet="https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/258s.jpg 1.03x,https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/348s.jpg 1.39x,https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/300s.jpg 1.20x" width="250"></img>
              </a>
            </div>
            <div className="photo-box-overlay js-overlay">
              <div className="media-block photo-box-overlay_caption">
                <div className="media-avatar avatar">
                  <div className="photo-box pb-30s">
                    <a className="js-analytics-click">
                      <img className="photo-box-img" height="30" src={props.pictures[1]} srcSet="https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/60s.jpg 2.00x,https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/90s.jpg 3.00x,https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/ss.jpg 1.33x" width="30"></img>
                    </a>
                  </div>
                </div>
                <div className="media-story">
                  <a className="photo-desc">
                    HRR38 =P
                  </a>
                  <span className="author">
                    by
                    <a className="user-display-name js-analytics-click" id="dropdown_user-name">Michael V.</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="js-photo photo photo-3">
            <div className="showcase-photo-box">
              <a href={props.pictures[2]}>
                <img className="photo-box-img" height="250" src={props.pictures[2]} srcSet="https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/258s.jpg 1.03x,https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/348s.jpg 1.39x,https://s3-media1.fl.yelpcdn.com/bphoto/g_FCZOJU0jDHIalkaVqYcg/300s.jpg 1.20x" width="250"></img>
              </a>
            </div>
            <div className="photo-box-overlay js-overlay">
              <div className="media-block photo-box-overlay_caption">
                <div className="media-avatar avatar">
                  <div className="photo-box pb-30s">
                    <a className="js-analytics-click">
                      <img className="photo-box-img" height="30" src={props.pictures[2]} srcSet="https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/60s.jpg 2.00x,https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/90s.jpg 3.00x,https://s3-media2.fl.yelpcdn.com/photo/XXvMCT-hh1Quuj8LiWH_0g/ss.jpg 1.33x" width="30"></img>
                    </a>
                  </div>
                </div>
                <div className="media-story">
                  <a className="photo-desc">
                    HRR38 =P
                  </a>
                  <span className="author">
                    by
                    <a className="user-display-name js-analytics-click" id="dropdown_user-name">Michael V.</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Gallery;