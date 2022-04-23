import React, { useState } from 'react'

const Nav = () => {
  return (
    <nav className="bg-purple-600 w-full min-h-fit flex justify-around">
		<div className='h-full flex items-center p-2'>
			<h1 className='font-bold text-2xl text-white'>Selector</h1>
		</div>
		<div className='min-h-full flex items-center'>
			<button className="bg-purple-400 text-white p-1 rounded-lg h-9 w-20 shadow hover:shadow-2xl">Sign in</button>
		</div>
    </nav>
  );
};

export default Nav
