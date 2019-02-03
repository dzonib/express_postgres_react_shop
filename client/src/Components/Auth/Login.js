import React, { Component } from 'react'
import { connect } from 'react-redux'

import StyledAuthForm from '../../styles/auth/Login'
import { InputAndLabel } from '../utils/InputAndLabel'
import StyledButton from '../../styles/buttons/StyledButton'
import { loginUser } from '../../redux/actions/auth/auth'

class Login extends Component {
	state = {
		email: '',
		password: '',
		errors: {}
	}

	onChangeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = (e) => {
		const { email, password } = this.state
		e.preventDefault()
		this.props.loginUser({ email, password }, this.props.history)
	}

	static getDerivedStateFromProps(nextProps) {
		return nextProps.errors && {errors: nextProps.errors}
	}

	render() {
		return (
			<StyledAuthForm onSubmit={this.submitHandler}>
				<h1>Sign in, yo yo</h1>
				<small>Admin can only be assigned by database administrator</small>
				<h3 style={{margin: '0.3rem', color: 'brown'}}>Admin credentials:</h3>
				<p style={{margin: '0.3rem', color: 'brown'}}>email: admin@test.com</p>
				<p style={{margin: '0.3rem', color: 'brown'}}>password: 123456</p>
				<InputAndLabel type="text" errors={this.state.errors.email} name="email" value={this.state.email} onChange={this.onChangeHandler} />
				<InputAndLabel
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.onChangeHandler}
					errors={this.state.errors.password}
				/>
				<StyledButton>Sign in</StyledButton>
			</StyledAuthForm>
		)
	}
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps, { loginUser })(Login)
