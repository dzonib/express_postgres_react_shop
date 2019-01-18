import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductInUsersCart from './ProductInUsersCart'
import { getCartItems } from '../../redux/actions/cart/getCartItems'
import { removeCartItem } from '../../redux/actions/cart/removeCartItem'
import StyledButton from '../../styles/buttons/StyledButton'
import { postOrders } from '../../redux/actions/orders/orders'

class ProductsInUsersCart extends Component {
	state = {
		crap: true
	}

	componentDidMount() {
		this.props.getCartItems()
	}

	handleRemove(id) {
		// must bind if used like this
		this.props.removeCartItem(id)
	}

	moveToOrders = () => {
		this.props.postOrders(this.props.history)
	}

	render() {
		return (
			
			<div>
				{this.props.cartItems.map((item) => {
					return (
						<ProductInUsersCart
							key={item.id}
							{...item}
							// binded
							handleRemove={this.handleRemove.bind(this)}
						/>
					)
				})}
				<hr style={{ marginTop: '30px' }} />
				{this.props.cartItems.length > 0 ? <StyledButton onClick={this.moveToOrders} style={{ width: '250px', height: '50px' }}>
					Order Now
				</StyledButton> : <h1>Nothing in cart :(</h1>}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		cartItems: state.productReducer.cart
	}
}

export default connect(mapStateToProps, { getCartItems, removeCartItem, postOrders })(ProductsInUsersCart)
