import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProductInUsersCart from './ProductInUsersCart'
import { getCartItems } from '../../redux/actions/cart/getCartItems'
import { removeCartItem } from '../../redux/actions/cart/removeCartItem'

class ProductsInUsersCart extends Component {

    state = {
        crap: true
    }

    componentDidMount() {
        this.props.getCartItems()
    }

    handleRemove(id) {
        this.props.removeCartItem(id)
    }

	render() {
		return (
			<div>
				{this.props.cartItems.map(item => {
                    return <ProductInUsersCart key={item.id} {...item} handleRemove={this.handleRemove.bind(this)} />
                })}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.productReducer.cart
    }
}

export default connect(mapStateToProps, { getCartItems, removeCartItem })(ProductsInUsersCart)
