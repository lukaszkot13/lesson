import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Topics from "./pages/Topics";

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/user">Users</Link>
						</li>
						<li>
							<Link to="/topics">Topics</Link>
						</li>
					</ul>

					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/user">
							<Users />
						</Route>
						<Route path="/topics">
							<Topics />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
