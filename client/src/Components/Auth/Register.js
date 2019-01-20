import React, { Component } from 'react'
import { connect } from 'react-redux'

import StyledAuthForm from '../../styles/auth/Login'
import { InputAndLabel } from '../utils/InputAndLabel'
import StyledButton from '../../styles/buttons/StyledButton'
import { registerUser } from '../../redux/actions/auth/auth'

class Register extends Component {
	state = {
		email: '',
		password: '',
		password2: '',
		name: '',
		errors: {}
	}

	onChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = (e) => {
		e.preventDefault()

		this.props.registerUser(this.state, this.props.history)
	}

	static getDerivedStateFromProps(nextProps) {
		return nextProps.errors && {errors: nextProps.errors}
	}

	render() {
		return (
			<StyledAuthForm onSubmit={this.submitHandler}>
				<h1>Sign up, yo</h1>
				<InputAndLabel
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.onChangeHandler}
					errors={this.state.errors.name}
				/>
				<InputAndLabel
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.onChangeHandler}
					errors={this.state.errors.email}
				/>
				<InputAndLabel
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.onChangeHandler}
					errors={this.state.errors.password}
				/>
				<InputAndLabel
					type="password2"
					name="password2"
					value={this.state.password2}
					onChange={this.onChangeHandler}
					errors={this.state.errors.password2}
				/>
				<StyledButton type="submit">Sign Up</StyledButton>
			</StyledAuthForm>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.authReducer,
		errors: state.errorsReducer
	}
}
export default connect(mapStateToProps, { registerUser })(Register)
