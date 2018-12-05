import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<ul>
			<li>
				<NavLink to="/">Shop</NavLink>
			</li>
			
			<li>
				<NavLink to="/products">Products</NavLink>
			</li>
			<li>
				<NavLink to="/cart">Cart</NavLink>
			</li>
			<li>
				<NavLink to="/order">Order</NavLink>
			</li>
			<li>
				<NavLink to="/add-product">Add Product</NavLink>
			</li>
			<li>
				<NavLink to="/admin/products">Admin Products</NavLink>
			</li>
		</ul>
	)
}

export default Nav
