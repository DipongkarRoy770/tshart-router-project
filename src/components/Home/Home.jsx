import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleS from "../SingleS/SingleS";
import Card from "../Card/Card";
import toast from 'react-hot-toast';


const Home = () => {
  const data = useLoaderData();
  const [cart ,serCart] =useState([])

  const handleClick =(t)=>{
    const exits= cart.find(ts=>ts._id===t._id)
    if (exits){
     toast('you have all ready selected')
    }
   else{
    const newCart = [...cart,t]
    serCart(newCart)
   }
  }
  const handleRemoveCart =(id)=>{
   const remining = cart.filter(ts=>ts._id!==id)
   serCart(remining)
  }
  return (
    <div className="flex mt-12 w-[90%] ">
      <div className="grid grid-cols-3 gap-4 mx-12">
        {data.map((data) => (
          <SingleS key={data._id} 
          data={data}
          handleClick={handleClick}
          ></SingleS>
        ))}
      </div>
      <div className="bg-red-400 w-[20%]">
        <Card 
        cart={cart}
        handleRemoveCart={handleRemoveCart}
        ></Card>
      </div>
    </div>
  );
};

export default Home;
