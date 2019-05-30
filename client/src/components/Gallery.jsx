import React from 'react';

const Gallery = (props) => (
  <div className="carousel">
    <div className="photo">
      <a target ="_blank" href={props.pictures[0]}>
        <img src={props.pictures[0]}></img>
      </a>
    </div>

    <div className="photo">
      <a target ="_blank" href={props.pictures[1]}>
        <img src={props.pictures[1]}></img>
      </a>
    </div>

    <div className="photo">
      <a target ="_blank" href={props.pictures[2]}>
        <img src={props.pictures[2]}></img>
      </a>
    </div>
  </div>
)

export default Gallery;