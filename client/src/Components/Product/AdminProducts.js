import React from 'react'
import { connect } from 'react-redux'

import { getProduct } from '../../redux/actions/product/getProduct'
import { deleteProduct } from '../../redux/actions/product/deleteProduct'
import StyledProductCard from '../../styles/Product/StyledProductCard'
import StyledButton from '../../styles/buttons/StyledButton'


const AdminProducts = ({ id, title, price, description, imageUrl, getProduct, history, deleteProduct }) => {
	
    return <StyledProductCard>
			<h1>{title}</h1>
			<img src={imageUrl} alt="product" />
            <h3>${price}</h3>
            <p>{description}</p>
			
			<div className="button-container">
				<StyledButton onClick={() => getProduct(id, history, 'update')}>Edit</StyledButton>
				<StyledButton onClick={() => deleteProduct(id)}>Delete</StyledButton>
			</div>
            
		</StyledProductCard>
}

export default connect(null, { getProduct, deleteProduct })(AdminProducts)