import React from 'react';

const SingleS = ({data,handleClick}) => {
  const {_id ,name,picture,price}=data;
  return (
    <div className='h-96 bg-red-50 pt-2 rounded relative mb-5'>
      <img className='w-48 h-60 border-orange-200 border-2 rounded mx-2' src={picture} alt="" />
      <h2 className='text-2xl mt-2 font-thin font-semibold'>{name}</h2>
      <h3>{_id}</h3>
      <h2 className='text-1xl font-bold'>${price}</h2>
      <button onClick={()=>handleClick(data)} className='bg-pink-200 py-1 px-2 rounded absolute bottom-0 -ml-2 mt-4  hover:bg-fuchsia-900'>Show details</button>
    </div>
  );
};

export default SingleS;