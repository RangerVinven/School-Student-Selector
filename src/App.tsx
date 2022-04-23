import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  return (
	<Router>
		<Nav />
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			
			<Route exact path="/signin">
				<Signin />
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
