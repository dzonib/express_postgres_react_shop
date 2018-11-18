import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<ul>
			<li>
				<NavLink to="/">Shop</NavLink>
			</li>
			<li>
				<NavLink to="/add-product">Add Product</NavLink>
			</li>
		</ul>
	)
}

export default Nav
