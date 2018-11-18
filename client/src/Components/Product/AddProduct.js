import React, { Component } from 'react'
import StyledAddProductForm from '../../styles/Product/StyledAddProductForm'
import StyledButton from '../../styles/buttons/StyledButton'

class AddProduct extends Component {
	render() {
		return (
			<StyledAddProductForm>
				<h1>Add Product</h1>
				<label htmlFor="title">Title</label>
				<input type="text" id="title" />
				<label htmlFor="price">Price</label>
				<input type="text" id="price" />
				<label htmlFor="description">Description</label>
				<input type="text" id="description" />
				<label htmlFor="imageUrl">Image URL</label>
				<input type="text" id="imageUrl" />
				<StyledButton type="submit">Add Product</StyledButton>
			</StyledAddProductForm>
		)
	}
}

export default AddProduct
