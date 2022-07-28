import React, {useState} from "react";

function PlantCard({ plant }) {
  const {name, image, price} = plant;
  
  const [showInStock, setShowInStock] = useState(true); 

  function handleShowInStock() { 
    setShowInStock((showInStock) => (!showInStock));
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {showInStock ? (
        <button className="primary" onClick={handleShowInStock}>In Stock</button>
      ) : (
        <button onClick={handleShowInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
