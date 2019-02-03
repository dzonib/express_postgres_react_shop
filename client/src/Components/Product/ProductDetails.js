import React from 'react'
import { connect } from 'react-redux'
import StyledProductDetails from '../../styles/Product/StyledProductDetails'
import StyledButton from '../../styles/buttons/StyledButton'
import { addToCart } from '../../redux/actions/product/AddProductToCart'
import Spinner from '../utils/Spinner';

const ProductDetails = (props) => {

	const addToCarthandler = () => {
		props.addToCart(props.product.id, props.history)
	}

	if (props.loading === true) {
		return <Spinner />
	} else {
		return (
			<StyledProductDetails>
				<h1>{props.product.title}</h1>
				<hr />
				<p>{props.product.description}</p>
				<img src={props.product.imageUrl} alt="Product" />
				<h3>${props.product.price} </h3>
				<StyledButton details onClick={() => addToCarthandler()}>Add to Cart</StyledButton>
			</StyledProductDetails>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		product: state.productReducer.product,
		loading: state.productReducer.loading
	}
}

export default connect(mapStateToProps, {addToCart})(ProductDetails)
