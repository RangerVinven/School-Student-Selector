import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-purple-600 w-full min-h-fit flex justify-around">
		<div className='h-full flex items-center p-2'>
			<Link to="/">
				<h1 className='font-bold text-2xl text-white'>
					Selector
				</h1>
			</Link>
		</div>

		<div className='min-h-full flex items-center'>
			<Link to="/signin">
				<button className="bg-purple-400 text-white p-1 rounded-lg h-9 w-20">
					Sign In
				</button>
			</Link>
		</div>
    </nav>
  );
};

export default Nav
