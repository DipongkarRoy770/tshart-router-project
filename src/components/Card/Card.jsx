import React from "react";

const Card = ({ cart, handleRemoveCart }) => {
  
  return (
    <div>
      <h1>balance summary :{cart.length}</h1>
      {/* danamic vabe amra condition use korte pari */}
      {cart.length>2 ?<p>aro kino vai</p>:<p>ami gorib manus</p>}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name} 
          <button onClick={()=>handleRemoveCart(tshirt._id)} className="bg-pink-700 py-1 px-2 rounded ml-5">x</button>
        </p>
      ))}
    </div>
  );
};

export default Card;
