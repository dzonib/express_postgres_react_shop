import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/actions/auth/auth'
import AdminNav from './AdminNav'
import LoggedInNav from './LoggedInNav'
import LoggedOutNav from './LoggedOut'

class Nav extends Component {
	logoutHandler = (e) => {
		e.preventDefault()
		this.props.logoutUser()
	}

	render() {
		const { isAuth, user } = this.props.auth

		if (isAuth && user.isAdmin) {
			return <AdminNav logout={this.logoutHandler} />
		}

		if (isAuth) {
			return <LoggedInNav logout={this.logoutHandler} />
		}

		if (!isAuth) {
			return <LoggedOutNav />
		}
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.authReducer
	}
}

export default connect(mapStateToProps, { logoutUser })(Nav)
