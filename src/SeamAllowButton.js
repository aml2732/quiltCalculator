import React from 'react';
import './SeamAllowButton.css';
import default_graphic from './images/seam-allow-emoji.png'

function SeamAllowButton({title, graphic, onSelect}) {

  const actualGraphic = graphic ? graphic : default_graphic;
  const selection_function = onSelect ? () => {return onSelect(title)} : () => {console.log("got here "+ title);return}

  return (
    <div className="SeamAllowButton" onClick={selection_function}>
      <div className="SeamAllowButton-title">{title}</div>
      <img src={actualGraphic} alt="grpahic goes here" />
    </div>
  );
}

export default SeamAllowButton;
