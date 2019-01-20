import React, { Component } from 'react'
import { connect } from 'react-redux'

import StyledAddProductForm from '../../styles/Product/StyledAddProductForm'
import StyledButton from '../../styles/buttons/StyledButton'
import { InputAndLabel } from '../utils/InputAndLabel'
import { addProduct } from '../../redux/actions/product/addProduct'

class AddProduct extends Component {
	state = {
		title: '',
		price: '',
		description: '',
		imageUrl: ''
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.addProduct(this.state, this.props.history)
	}

	render() {
		return (
			<StyledAddProductForm onSubmit={this.onSubmit}>
				<h1>Add Product</h1>
				<InputAndLabel type="text" name="title" onChange={this.onChange} />
				<InputAndLabel type="number" name="price" onChange={this.onChange} />
				<InputAndLabel type="text" name="imageUrl" onChange={this.onChange} />
				<label htmlFor='description'>Description</label>
				<textarea id='description' name="description" rows="5" onChange={this.onChange}></textarea>
				
				<StyledButton type="submit">Add Product</StyledButton>
			</StyledAddProductForm>
		)
	}
}

// const mapStateToProps = state => {
// 	return {
// 		auth: state.authReducer
// 	}
// }

export default connect(null, { addProduct })(AddProduct)
