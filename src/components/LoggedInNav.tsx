import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
	username: string
}

const Nav = (props: Props) => {
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
			<h3 className="text-white font-bold text-md">{props.username}</h3>
		</div>
    </nav>
  );
};

export default Nav
