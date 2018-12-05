import React from 'react'
import StyledProductCard from '../../styles/Product/StyledProductCard'
import StyledButton from '../../styles/buttons/StyledButton'

const CartItem = ({id, title, price, description, imageUrl, handleDetails }) => {
	return (
		<StyledProductCard>
			<h1>{title}</h1>
			<img src={imageUrl} alt="product" />
            <h3>${price}</h3>
            <p>{description}</p>
			
			<div className="button-container">
				<StyledButton onClick={() => handleDetails(id)}>Details</StyledButton>
				<StyledButton>Add to Cart</StyledButton>
			</div>
            
		</StyledProductCard>
	)
}

export default CartItem
