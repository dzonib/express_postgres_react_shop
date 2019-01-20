import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'
import jwtDecode from 'jwt-decode'

import theme from '../styles/globalStyles/theme'
import Header from './Layout/Header'
import GlobalStyle from '../styles/globalStyles/GlobalStyles'
import AddProduct from './Product/AddProduct'
import CartItemsList from './Product/CartItemsList'
import store from '../redux/store'
import ProductDetails from './Product/ProductDetails'
import UpdateProduct from './Product/UpdateProduct'
import ProductsInUsersCart from './Cart/ProductsInUsersCart'
import OrderList from './Orders/OrderList'
import Login from './Auth/Login'
import Register from './Auth/Register'
import setTokenToHeader from '../util/setTokenToHeader'
import { SET_CURRENT_USER } from '../redux/types';


if (localStorage.jwt) {
	setTokenToHeader(localStorage.jwt)

	const token = jwtDecode(localStorage.jwt)

	store.dispatch({type: SET_CURRENT_USER, payload: token})
}


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<ThemeProvider theme={theme}>
						<>
							<Header />
							<Switch>
								<Route exact path='/' component={CartItemsList} />
								<Route exact path='/add-product' component={AddProduct} />
								<Route exact path='/admin/products' component={CartItemsList} />
								<Route exact path='/get-product/:id' component={ProductDetails} />
								<Route exact path='/product/update' component={UpdateProduct} />
								<Route exact path='/cart' component={ProductsInUsersCart} />
								<Route exact path='/orders' component={OrderList} />
								<Route exact path='/login' component={Login} />
								<Route exact path='/register' component={Register} />
							</Switch>
							<GlobalStyle />
						</>  
					</ThemeProvider>
				</Router>
			</Provider>
		)
	}
}

export default App
