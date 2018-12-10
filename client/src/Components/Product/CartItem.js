import React from 'react'
import {connect} from 'react-redux'

import StyledProductCard from '../../styles/Product/StyledProductCard'
import StyledButton from '../../styles/buttons/StyledButton'
import { addToCart } from '../../redux/actions/product/AddProductToCart';

const CartItem = ({id, title, price, description, imageUrl, handleDetails, history, addToCart }) => {
	return (
		<StyledProductCard>
			<h1>{title}</h1>
			<img src={imageUrl} alt="product" />
            <h3>${price}</h3>
            <p>{description}</p>
			
			<div className="button-container">
				<StyledButton onClick={() => handleDetails(id)}>Details</StyledButton>
				<StyledButton onClick={() => addToCart(id, history)}>Add to Cart</StyledButton>
			</div>
            
		</StyledProductCard>
	)
}


export default connect(null, { addToCart })(CartItem)
