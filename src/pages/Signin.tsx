import React from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div className="flex items-center justify-center">
		<div className='w-fit'>
			<div className=''>
				<Header title="Sign In" />
			</div>
			<hr className='my-2' />

			<div className="w-full flex flex-col items-center">
				<input placeholder="Email" className='border-gray-300 rounded-md border-2 pl-1 mt-1 mb-2'></input>
				<input placeholder="Password" className='border-gray-300 rounded-md border-2 pl-1 mb-4'></input>
				<button className='bg-blue-400 w-24 text-md font-bold py-1 hover:shadow-md rounded-lg'>Sign In</button>

				<div className="my-2 italic">
					<p>Or</p>
				</div>

				<Link to="/signup" >
					<button className='bg-green-400 w-24 text-md font-bold py-1 hover:shadow-md rounded-lg'>Sign Up</button>
				</Link>

			</div>
		</div>
    </div>
  )
}
