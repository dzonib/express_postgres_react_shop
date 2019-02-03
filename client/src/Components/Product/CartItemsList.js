import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getProducts } from '../../redux/actions/product/getProducts'
import CartItem from './CartItem';
import StyledProductsList from '../../styles/Product/StyledProductsList'
import AdminProducts from './AdminProducts'
import { getProduct } from '../../redux/actions/product/getProduct'
import { StyledPageNumbers } from '../../styles/Product/StyledPageNumber';
import { NavLink } from 'react-router-dom'


class CartItemsList extends Component {

    state = {
        admin: false,
        items: [],
        pages: []
    }

    componentDidMount() {
        this.props.getProducts(this.props.match.params.page)
    }
    static getDerivedStateFromProps(props, state) {
        
        if (props.products) {
            return {
                items: props.products,
                pages: props.pages
            }
        } else return {}
    }

    handleDetails = (id) => {
        // CALL ACTION TO GET PRODUCT HERE
        this.props.getProduct(id, this.props.history)
    }


    render() {
        const pages = []

        for (let i = 1; i < this.state.pages +1; i++) {
            pages.push(i)
        }

        const adminRoute = this.props.location.pathname.includes('/admin');

        const pathToTake = adminRoute ? '/admin/products' : '/products'

        return (
            <>
                <h1>See (and buy) our products</h1>
                <StyledProductsList>
                    {
                        this.state.items.map(item => {
                            if (adminRoute) {
                                return <AdminProducts 
                                    key={item.id} {...item} {...this.props}
                                />
                            } else {
                                return <CartItem 
                                    key={item.id} 
                                    pages={pages}
                                    {...item} 
                                    history={this.props.history}
                                    handleDetails={this.handleDetails} 
                                />
                            }
                        })
                    }

                    
                </StyledProductsList>
                <StyledPageNumbers>
                    {pages.map(item => <NavLink
                        to={`${pathToTake}/${item}`}
                        onClick={() => this.props.getProducts(item)}
                        key={item}> {item} </NavLink>
                    )}
                </StyledPageNumbers>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.productReducer.products.result,
        pages: state.productReducer.products.pages
    }
}

export default connect( mapStateToProps, { getProducts, getProduct })(CartItemsList)