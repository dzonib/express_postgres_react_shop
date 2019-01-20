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

	render() {
		return (
			<StyledAuthForm onSubmit={this.submitHandler}>
				<h1>Sign in, yo yo</h1>
				<InputAndLabel type="text" name="email" value={this.state.email} onChange={this.onChangeHandler} />
				<InputAndLabel
					type="password"
					name="password"
					value={this.state.password}
					onChange={this.onChangeHandler}
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
