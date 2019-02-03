import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedInNav = (props) => {
	return (
		<ul>
			<ul>
				<li>
					<NavLink to="/products/1">Shop</NavLink>
				</li>
				<li>
					<NavLink to="/cart">Cart</NavLink>
				</li>
				<li>
					<NavLink to="/orders">Order</NavLink>
				</li>
				<li>
					<NavLink to="#" onClick={props.logout}>
						Logout
					</NavLink>
				</li>
			</ul>
		</ul>
	)
}

export default LoggedInNav
