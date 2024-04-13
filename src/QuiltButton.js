import React from 'react';
import './QuiltButton.css';
import default_graphic from './images/bed-emoji.png'

function QuiltButton({title, graphic, onSelect}) {

  const actualGraphic = graphic ? graphic : default_graphic;
  const selection_function = onSelect ? () => {return onSelect(title)} : () => {console.log("got here "+ title);return}

  return (
    <div className="QuiltButton" onClick={selection_function}>
      <div className="QuiltButton-title">{title}</div>
      <img src={actualGraphic} alt="grpahic goes here" />
    </div>
  );
}

export default QuiltButton;
