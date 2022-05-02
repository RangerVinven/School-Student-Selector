import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

interface Props {
	setToken: Function
}

async function signupUser(credentials:{
	email: string,
	username: string,
	password: string
	}) {
	return fetch("http://192.168.1.210:8000/api/signup", {
		method: "POST",
		headers: {
			"Content-Type": "application/json" 
		},
		body: JSON.stringify(credentials)
	}).then(data => data.json());
}

export default function Signup(props: Props) {

	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	// For if the user doesn't enter a required field
	const [inputtedAllRequiredFields, setInputtedAllRequiredFields] = useState(false);

  return (
    <div className="flex items-center justify-center mt-40">
      <div className='w-fit'>
        <div className=''>
          <Header title="Sign Up" />
        </div>
        <hr className='my-2' />

        <div className="w-full flex flex-col items-center">
				<input onChange={e => setEmail(e.target.value)} placeholder="Email" className='border-gray-300 rounded-md border-2 pl-1 mt-1 mb-1'></input>
				<input onChange={e => setUsername(e.target.value)} placeholder="Username" className='border-gray-300 rounded-md border-2 pl-1 mt-1 mb-2'></input>
				<input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className='border-gray-300 rounded-md border-2 pl-1 mb-4'></input>
				<button className='bg-green-400 w-24 text-md font-bold py-1 hover:shadow-md rounded-lg' onClick={async () => {
						// Gets the response from the signin
						const response = await signupUser({email, username, password});

						// Sets the token if the user enters the correct credentials
						if(response.hasOwnProperty("token")) {
							props.setToken(JSON.stringify(response));
						} else {
							setInputtedAllRequiredFields(false);
						}
					}}>Sign Up</button>

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
