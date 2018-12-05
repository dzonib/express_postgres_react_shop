import React, { Component } from 'react'
import { connect } from 'react-redux'

import StyledAddProductForm from '../../styles/Product/StyledAddProductForm'
import StyledButton from '../../styles/buttons/StyledButton'
import { InputAndLabel } from '../utils/InputAndLabel'
import { updateProduct } from '../../redux/actions/product/updateProduct'

class UpdateProduct extends Component {
	state = {
		title: '',
		price: '',
		description: '',
		imageUrl: '',
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.updateProduct({...this.state, id: this.props.product.id}, this.props.history)
	}

	static getDerivedStateFromProps(props, state) {
		if (props.product && state.title.length === 0) {
			return {
				title: props.product.title,
				price: props.product.price,
				description: props.product.description,
				imageUrl: props.product.imageUrl
			}
		} else {
			return state
		}
		
	}

	render() {
		return (
			<StyledAddProductForm onSubmit={this.onSubmit}>
				<h1>Add Product</h1>
				<InputAndLabel type="text" value={this.state.title} name="title" onChange={this.onChange} />
				<InputAndLabel type="number" value={this.state.price} name="price" onChange={this.onChange} />
				<InputAndLabel type="text" value={this.state.imageUrl} name="imageUrl" onChange={this.onChange} />
				<label htmlFor="description">Description</label>
				<textarea
					id="description"
					value={this.state.description}
					name="description"
					rows="5"
					onChange={this.onChange}
				/>

				<StyledButton type="submit">Update</StyledButton>
			</StyledAddProductForm>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		product: state.productReducer.product
	}
}

export default connect(mapStateToProps, { updateProduct })(UpdateProduct)
