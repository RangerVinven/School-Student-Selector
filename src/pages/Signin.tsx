import React, { useState } from 'react'
import Header from '../components/Header';
import { Link } from 'react-router-dom';

interface Props {
	setToken: Function
}

// Signs the user in
async function signinUser(credentials:{
	email: string,
	password: string
	}) {
	return fetch("http://localhost:8000/signin", {
		method: "POST",
		headers: {
			"Content-Type": "application/json" 
		},
		body: JSON.stringify(credentials)
	}).then(data => data.json());
}

export default function Signin(props: Props) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [correctCreds, setCorrectCreds] = useState(false);

	return (
		<div className="flex items-center justify-center mt-40">
			<div className='w-fit'>
				<div className=''>
					<Header title="Sign In" />
				</div>
				<hr className='my-2' />

				<div className="w-full flex flex-col items-center">
					<input onChange={e => setEmail(e.target.value)} placeholder="Email" className='border-gray-300 rounded-md border-2 pl-1 mt-1 mb-2'></input>
					<input onChange={e => setPassword(e.target.value)} placeholder="Password" className='border-gray-300 rounded-md border-2 pl-1 mb-4'></input>

					<button className='bg-blue-400 w-24 text-md font-bold py-1 hover:shadow-md rounded-lg' onClick={async () => {
						// Gets the response from the signin
						const response = await signinUser({email, password});

						// Sets the token if the user enters the correct credentials
						if(response.hasOwnProperty("token")) {
							props.setToken(JSON.stringify(response));
						} else {
							setCorrectCreds(false);
						}
					}}>Sign In</button>

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
