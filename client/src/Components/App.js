import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import theme from '../styles/globalStyles/theme'
import Header from './Layout/Header'
import GlobalStyle from '../styles/globalStyles/GlobalStyles'
import AddProduct from './Product/AddProduct';
import CartItemsList from './Product/CartItemsList';

class App extends Component {
	render() {
		return (
			<Router>
				<ThemeProvider theme={theme}>
        <>
						<Header />
						<Route exact path='/' component={CartItemsList} />
						<Route path='/add-product' component={AddProduct} />
					<GlobalStyle />
        </>  
				</ThemeProvider>
			</Router>
		)
	}
}

export default App
