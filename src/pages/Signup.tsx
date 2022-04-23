import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="flex items-center justify-center mt-40">
      <div className='w-fit'>
        <div className=''>
          <Header title="Sign Up" />
        </div>
        <hr className='my-2' />

        <div className="w-full flex flex-col items-center">
				<input placeholder="Email" className='border-gray-300 rounded-md border-2 pl-1 mt-1 mb-2'></input>
				<input placeholder="Password" className='border-gray-300 rounded-md border-2 pl-1 mb-4'></input>
				<button className='bg-green-400 w-24 text-md font-bold py-1 hover:shadow-md rounded-lg'>Sign Up</button>

				<div className="my-2 italic">
					<p>Or</p>
				</div>

				<Link to="/signin" >
					<button className='bg-blue-400 w-24 text-md font-bold py-1 hover:shadow-md rounded-lg'>Sign In</button>
				</Link>
			</div>
		  </div>
    </div>
  )
}
