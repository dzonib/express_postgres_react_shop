import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Provider} from 'react-redux'

import theme from '../styles/globalStyles/theme'
import Header from './Layout/Header'
import GlobalStyle from '../styles/globalStyles/GlobalStyles'
import AddProduct from './Product/AddProduct'
import CartItemsList from './Product/CartItemsList'
import store from '../redux/store'
import ProductDetails from './Product/ProductDetails'
import UpdateProduct from './Product/UpdateProduct'
import ProductsInUsersCart from './Cart/ProductsInUsersCart';

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
