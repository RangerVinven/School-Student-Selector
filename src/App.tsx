import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {

	const [token, setToken] = useState("");

	// Redirects the user to the signin if the user doesn't have a session token
	if(!token) {
		return (
			<Router>
				<Switch>
					<Route exact path="/signup">
						<Nav />
						<Signup />
					</Route>

					<Route path="/">
						<Nav />
						<Signin setToken={setToken} />
					</Route>
				</Switch>
			</Router>
		)
	}

	return (
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				
				<Route exact path="/signin">
					<Signin setToken={setToken} />
				</Route>

				<Route exact path="/signup">
					<Signup />
				</Route>

				<Route>
					<NotFound />
				</Route>

			</Switch>
		</Router>
	);
};

export default App;
