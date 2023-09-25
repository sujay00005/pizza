import React from "react";
import Pizza from "./Pizza";
import pizzaData from "./data";

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.map(createPizza)}
    </main>
  );
}


function createPizza(pizza){
  return(
    <Pizza  
      key={pizza.name}
      photoName={pizza.photoName}
      name={pizza.name}
      ingredients={pizza.ingredients}
      price={pizza.price}
    />
  );
}

export default Menu;
