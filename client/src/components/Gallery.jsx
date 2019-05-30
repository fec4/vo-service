import React from 'react';

const Gallery = (props) => (
  <div class="carousel">
    <div class="photo">
      <a target ="_blank" href={props.pictures[0]}>
        <img src={this.props.pictures[0]}></img>
      </a>
    </div>

    <div class="photo">
      <a target ="_blank" href={props.pictures[1]}>
        <img src={this.props.pictures[1]}></img>
      </a>
    </div>

    <div class="photo">
      <a target ="_blank" href={props.pictures[2]}>
        <img src={this.props.pictures[2]}></img>
      </a>
    </div>
  </div>
)

export default Gallery;