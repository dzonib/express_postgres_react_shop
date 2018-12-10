import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getProducts } from '../../redux/actions/product/getProducts'
import CartItem from './CartItem';
import StyledProductsList from '../../styles/Product/StyledProductsList'
import AdminProducts from './AdminProducts'
import { getProduct } from '../../redux/actions/product/getProduct'

class CartItemsList extends Component {

    state = {
        admin: false,
        items: []
    }

    componentDidMount() {
        this.props.getProducts()
    }

    static getDerivedStateFromProps(props, state) {
        if (props.products) {
            return {
                items: props.products
            }
        }
    }

    handleDetails = (id) => {
        // CALL ACTION TO GET PRODUCT HERE
        this.props.getProduct(id, this.props.history)
    }


    render() {
        return (
            <>
                <h1>See (and buy) our products</h1>
                <StyledProductsList>
                    {
                        this.state.items.map(item => {
                            if (this.props.location.pathname === "/admin/products") {
                                return <AdminProducts 
                                    key={item.id} {...item} {...this.props}
                                />
                            } else {
                                return <CartItem 
                                    key={item.id} 
                                    {...item} 
                                    history={this.props.history}
                                    handleDetails={this.handleDetails} 
                                />
                            }
                        })
                    }
                </StyledProductsList>
            </>
     
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.productReducer.products
    }
}

export default connect( mapStateToProps, { getProducts, getProduct })(CartItemsList)