import React from 'react';

const CardLeft = ({ appno, totalapps, img, app }) => (
  <div className="col-left">
    <div className="app-no">
      <span className="current">{`0${app.songs.length}`}</span>
      <span className="connector">of </span><br />
      <span className="total">songs</span>
    </div>
    <img className="app-icon" src={img.src} alt={img.alt} height="120" width="120" />
  </div>
)

export default CardLeft;
