import React from "react";

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  );
}

export default Pizza;
