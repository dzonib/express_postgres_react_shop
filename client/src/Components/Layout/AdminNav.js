import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminNav = (props) => {
	return (
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
				<NavLink to="/add-product">Add Product</NavLink>
			</li>
			<li>
				<NavLink to="/admin/products/1">Admin Products</NavLink>
			</li>
			<li>
				<NavLink to="#" onClick={props.logout}>
					Logout
				</NavLink>
			</li>
		</ul>
	)
}

export default AdminNav
