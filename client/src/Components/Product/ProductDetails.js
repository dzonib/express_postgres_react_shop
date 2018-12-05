import React from 'react'
import { connect } from 'react-redux'
import StyledProductDetails from '../../styles/Product/StyledProductDetails'
import StyledButton from '../../styles/buttons/StyledButton'

const ProductDetails = ({ product }) => {
	return (
		<StyledProductDetails>
			<h1>{product.title}</h1>
			<hr />
			<p>{product.description}</p>
			<img src={product.imageUrl} alt="Product" />
			<h3>${product.price} </h3>
            <StyledButton details>Add to Cart</StyledButton>
		</StyledProductDetails>
	)
}

const mapStateToProps = (state) => {
	return {
		product: state.productReducer.product
	}
}

export default connect(mapStateToProps)(ProductDetails)
