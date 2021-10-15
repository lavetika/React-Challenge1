import React from "react";

function PokeCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.front_default} alt="Pokemon" />
      <img src={props.front_shiny} alt="Pokemon" />
      <div>
        <a target="_blank" rel="noreferrer" href={props.video}>
          Link to video
        </a>
      </div>
    </div>
  );
}

export default PokeCard;
