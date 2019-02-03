import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedOutNav = () => {
	return (
		<ul>
			<li>
				<NavLink to="/products/1">Shop</NavLink>
			</li>
			<li>
				<NavLink to="/login">Sign In</NavLink>
			</li>
			<li>
				<NavLink to="/register">Sign Up</NavLink>
			</li>
		</ul>
	)
}

export default LoggedOutNav
