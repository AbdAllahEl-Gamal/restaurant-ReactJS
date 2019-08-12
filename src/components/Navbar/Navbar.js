import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import logo from "../../logo.png";

// Function Component

function Navbar() {
	return (
		<nav className="navbar">
			<img src={logo} alt="food logo" />
			<ul className="nav-links">
				<li>
					<NavLink exact activeClassName="active" to="/" style={{ textDecoration: 'none'}}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/about" style={{ textDecoration: 'none'}}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/menu" style={{ textDecoration: 'none'}}>
						Menu
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

// Class Component

/*class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<img src={logo} alt="food logo" />
				<ul className="nav-links">
					<li>
						<NavLink exact activeClassName="active" to="/" style={{ textDecoration: 'none'}}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/about" style={{ textDecoration: 'none'}}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink activeClassName="active" to="/menu" style={{ textDecoration: 'none'}}>
							Menu
						</NavLink>
					</li>
				</ul>
			</nav>
		);
	}
}*/

export default Navbar