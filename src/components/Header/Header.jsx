import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='font-mono text-2xl mt-3 ml-2 bg-slate-500 py-3 w-11/12 pl-12'>
      <Link className='mr-10 text-indigo-700' to="/">Home</Link>
      <Link className='mr-10 text-indigo-700' to="/order">OderReview</Link>
      <Link className='mr-10 text-indigo-700' to="/about">About</Link>
      <Link className='mr-10 text-indigo-700' to="/contact">Contact</Link>
    </nav>
  );
};

export default Header;