import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import LoggedInNav from './components/LoggedInNav'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import useToken from "./customHooks/useToken";
import WheelPage from './pages/WheelPage';

const App = () => {

	// Gets the username for the LoggedInNav
	const getUsername = () => {
		return "Vinven";
	}

	const { token, setToken } = useToken();


	// Redirects the user to the signin if the user doesn't have a session token
	if(!token) {
		return (
			<Router>
				<Switch>
					<Route exact path="/signup">
						<Nav />
						<Signup setToken={setToken} />
					</Route>

					<Route path="/">
						<Nav />
						<Signin setToken={setToken} />
					</Route>
				</Switch>
			</Router>
		)
	} else {
		const username = getUsername();

		return (
			<Router>
				<LoggedInNav username={username} />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					
					<Route exact path="/signin">
						<Signin setToken={setToken} />
					</Route>
	
					<Route exact path="/signup">
						<Signup setToken={setToken} />
					</Route>
	
					<Route exact path="/wheel">
						<WheelPage />
					</Route>
	
					<Route>
						<NotFound />
					</Route>
	
				</Switch>
			</Router>
		);
	}
};

export default App;
