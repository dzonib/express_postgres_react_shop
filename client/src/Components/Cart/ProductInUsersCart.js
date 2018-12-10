import React from 'react'
import { StyledCartItem } from '../../styles/cart/StyledCartItem'
import StyledButton from '../../styles/buttons/StyledButton';

const ProductInUsersCart = ({id, title, quantity, handleRemove}) => {
	return (
		<StyledCartItem>
			<h1>{title}</h1> 
			<h1>Quantity: {quantity}</h1>
			<StyledButton danger onClick={() => handleRemove(id)}>Remove</StyledButton>
		</StyledCartItem>
	)
}

export default ProductInUsersCart